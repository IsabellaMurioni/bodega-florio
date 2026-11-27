import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';
import styles from './RevealText.module.css';

interface RevealTextProps {
  /** One entry per visual line; each line is masked and revealed bottom-up in turn. */
  lines: ReactNode[];
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  className?: string;
  /** Delay before the first line, in ms. */
  delay?: number;
  /** Delay between lines, in ms. */
  stagger?: number;
  id?: string;
}

/**
 * Line-mask reveal: when the block enters the viewport each line wipes in from the bottom
 * (clip-path) while sliding up. With prefers-reduced-motion the text is shown immediately.
 */
function RevealText({
  lines,
  as: Tag = 'div',
  className,
  delay = 0,
  stagger = 90,
  id,
}: RevealTextProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <Tag
      // The polymorphic tag accepts any HTMLElement ref.
      ref={ref as never}
      id={id}
      className={[styles.reveal, visible && styles.visible, className].filter(Boolean).join(' ')}
    >
      {lines.map((line, i) => (
        <span
          key={i}
          className={styles.line}
          style={{ '--line-delay': `${delay + i * stagger}ms` } as CSSProperties}
        >
          <span className={styles.inner}>{line}</span>
        </span>
      ))}
    </Tag>
  );
}

export default RevealText;
