import { useEffect, useState } from 'react';
import markWhite from '@/assets/brand/mark-white.png';
import styles from './Loader.module.css';

const MIN_MS = 1200;
const MAX_MS = 4000;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const pageLoaded = () =>
  document.readyState === 'complete'
    ? Promise.resolve()
    : new Promise<void>((resolve) =>
        window.addEventListener('load', () => resolve(), { once: true }),
      );

interface LoaderProps {
  /** Called when the loader has fully faded out. */
  onDone: () => void;
}

/**
 * First-load intro: full-screen bordeaux with the Florio mark gently pulsing. It stays until the
 * fonts and the page are ready (at least 1.2s, at most 4s), then fades out (0.6s, 0.2s with
 * reduced motion; see the CSS). Layout mounts it once, so in-app navigation never shows it again.
 */
function Loader({ onDone }: LoaderProps) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const ready = Promise.all([document.fonts.ready, pageLoaded(), wait(MIN_MS)]);
    Promise.race([ready, wait(MAX_MS)]).then(() => {
      if (!cancelled) setLeaving(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Safety net in case transitionend never fires (e.g. the tab is in the background).
  useEffect(() => {
    if (!leaving) return;
    const id = setTimeout(onDone, 1000);
    return () => clearTimeout(id);
  }, [leaving, onDone]);

  return (
    <div
      className={leaving ? `${styles.loader} ${styles.leaving}` : styles.loader}
      role="status"
      aria-label="Cargando Bodega Florio"
      onTransitionEnd={(event) => {
        if (leaving && event.target === event.currentTarget) onDone();
      }}
    >
      <img src={markWhite} alt="" width={56} height={56} className={styles.mark} />
    </div>
  );
}

export default Loader;
