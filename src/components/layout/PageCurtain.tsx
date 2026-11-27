import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAnimate } from 'motion/react-mini';
import { isSmoothScrolling, resetScroll, scrollToElement } from '@/services/smoothScroll';
import styles from './PageCurtain.module.css';

/** --ease-curtain from tokens.css. */
const EASE_CURTAIN = [0.68, 0.09, 0, 0.97] as const;
const DURATION = 0.6;

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));
const nextFrames = () =>
  new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  );
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Scrolls instantly to the hash target of the new page, or to the top. */
function settleScroll(hash: string) {
  resetScroll();
  const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
  if (!target) return;
  const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
  const top = target.getBoundingClientRect().top + window.scrollY - margin;
  window.scrollTo({ top, behavior: 'instant' });
}

/**
 * Page transition for internal links. A capture-phase click listener catches every same-origin
 * <a> (router Links included: preventDefault stops their own navigation, while their onClick,
 * e.g. closing the mobile menu, still runs). A bordeaux panel led by a gold strip wipes in from
 * the right, the route changes while the screen is covered, the page jumps to the top, and the
 * panel leaves to the left. Back/forward (POP) navigations are not intercepted, so they just
 * render. In-page #anchors scroll smoothly instead. Reduced motion: plain navigation.
 */
function PageCurtain() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const [active, setActive] = useState(false);
  const busy = useRef(false);
  const onLocation = useRef<(() => void) | null>(null);

  // Resolve the pending navigation once the new location has rendered.
  useEffect(() => {
    onLocation.current?.();
    onLocation.current = null;
  }, [location]);

  useEffect(() => {
    const run = async (to: URL, fromMenu: boolean) => {
      busy.current = true;
      setActive(true);
      if (fromMenu) await wait(200); // let the mobile menu start closing first
      await animate(
        scope.current,
        { transform: ['translateX(100%)', 'translateX(0%)'] },
        { duration: DURATION, ease: EASE_CURTAIN },
      );

      const rendered = new Promise<void>((resolve) => {
        onLocation.current = resolve;
      });
      navigate(to.pathname + to.search + to.hash);
      await rendered;
      await nextFrames();
      settleScroll(to.hash);
      document.getElementById('contenido')?.focus({ preventScroll: true });

      await animate(
        scope.current,
        { transform: ['translateX(0%)', 'translateX(-100%)'] },
        { duration: DURATION, ease: EASE_CURTAIN },
      );
      setActive(false);
      busy.current = false;
    };

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!(link instanceof HTMLAnchorElement)) return;
      if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return;

      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      const samePage =
        url.pathname === window.location.pathname && url.search === window.location.search;

      if (samePage) {
        // In-page anchor: smooth scroll with Lenis (native scrolling handles it otherwise).
        const target = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
        if (target && isSmoothScrolling()) {
          event.preventDefault();
          scrollToElement(target);
          window.history.replaceState(window.history.state, '', url.hash);
        }
        return; // same page without hash: let the router handle it (no-op)
      }

      if (reducedMotion()) return; // plain router navigation
      event.preventDefault();
      if (busy.current) return;
      void run(url, link.closest('#site-menu') !== null);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [animate, navigate, scope]);

  return (
    <div
      ref={scope}
      className={styles.curtain}
      // While covering, it also blocks clicks on the page underneath.
      style={{ visibility: active ? 'visible' : 'hidden', pointerEvents: active ? 'auto' : 'none' }}
      aria-hidden="true"
    >
      <span className={styles.strip} />
    </div>
  );
}

export default PageCurtain;
