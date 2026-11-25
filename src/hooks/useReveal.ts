import { useEffect, useRef, useState } from 'react';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Returns a ref and a `visible` flag that turns true (once) when the element enters the viewport.
 * With reduced motion, or without IntersectionObserver, the element is visible from the start.
 */
export function useReveal<T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(
    () => prefersReducedMotion() || typeof IntersectionObserver === 'undefined',
  );
  const { root, rootMargin, threshold } = options;

  useEffect(() => {
    const el = ref.current;
    if (visible || !el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root, rootMargin, threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, root, rootMargin, threshold]);

  return { ref, visible };
}
