import { useEffect, type RefObject } from 'react';

/**
 * Writes the scroll progress of `ref` through the viewport into the CSS variable `--p` (0 to 1)
 * on that element, once per animation frame while scrolling. CSS then derives parallax offsets,
 * e.g. `transform: translateY(calc(var(--p) * -40vh))`. Lighter than Motion's useScroll.
 *
 * - 'pin': 0 when the element's top hits the viewport top, 1 when its bottom does.
 * - 'pass': 0 when the element enters at the bottom, 1 when it leaves at the top.
 * With prefers-reduced-motion it does nothing (--p stays unset, so CSS falls back to 0).
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>, mode: 'pin' | 'pass') {
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress =
        mode === 'pin'
          ? -rect.top / Math.max(1, rect.height - vh)
          : (vh - rect.top) / (vh + rect.height);
      el.style.setProperty('--p', Math.min(1, Math.max(0, progress)).toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [ref, mode]);
}
