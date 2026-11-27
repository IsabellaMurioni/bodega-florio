import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

/**
 * Lenis smooth scroll, desktop pointers only. Touch devices and prefers-reduced-motion keep
 * native scrolling. Lenis drives the window scroll, so position: sticky, scroll listeners and
 * scroll-margin keep working as usual.
 */
let lenis: Lenis | null = null;

const shouldSmooth = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function startSmoothScroll() {
  if (lenis || !shouldSmooth()) return;
  lenis = new Lenis({ autoRaf: true, lerp: 0.1 });
}

export function stopSmoothScroll() {
  lenis?.destroy();
  lenis = null;
}

/** Jump to the top with no animation (used by the page curtain while the screen is covered). */
export function resetScroll() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

/**
 * Smoothly scroll to an in-page target, honouring its CSS scroll-margin-top. The target position
 * is computed from the real window scroll, so it stays right even if a native scroll (browser
 * restore, find-in-page, focus) happened outside Lenis.
 */
export function scrollToElement(el: HTMLElement) {
  if (!lenis) {
    el.scrollIntoView({ behavior: 'smooth' });
    return;
  }
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  const top = el.getBoundingClientRect().top + window.scrollY - margin;
  lenis.scrollTo(top);
}

export function isSmoothScrolling() {
  return lenis !== null;
}
