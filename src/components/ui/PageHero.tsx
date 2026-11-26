import Reveal from '@/components/ui/Reveal';
import type { PlaceholderTone } from '@/components/ui/ImagePlaceholder';
import styles from './PageHero.module.css';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  /** Gradient used until the real photo arrives (default vineyard). */
  tone?: PlaceholderTone;
  /** What the future photo shows; rendered as "[Foto: ...]". */
  photoLabel?: string;
}

/** Shorter dark hero for inner pages. */
function PageHero({ eyebrow, title, tone = 'vineyard', photoLabel }: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${styles[tone]}`} aria-labelledby="page-title">
      {photoLabel && (
        <span className={styles.photoLabel} role="img" aria-label={photoLabel}>
          <span aria-hidden="true">[Foto: {photoLabel}]</span>
        </span>
      )}
      <div className={`container ${styles.inner}`}>
        <Reveal>
          <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>
          <h1 id="page-title" className={styles.title}>
            {title}
          </h1>
        </Reveal>
      </div>
    </section>
  );
}

export default PageHero;
