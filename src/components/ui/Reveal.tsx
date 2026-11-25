import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './Reveal.module.css';

interface RevealProps {
  children: ReactNode;
  /** Delay before the transition starts, in ms. */
  delay?: number;
  className?: string;
}

/** Fades and slides its content up the first time it scrolls into view. */
function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={[styles.reveal, visible && styles.visible, className].filter(Boolean).join(' ')}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default Reveal;
