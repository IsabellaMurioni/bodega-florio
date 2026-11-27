import type { ReactNode } from 'react';
import styles from './DisplayTitle.module.css';

export type DisplaySize = 'xl' | 'l' | 'm' | 's' | 'card';

interface DisplayTitleProps {
  children: ReactNode;
  /** xl 192 / l 128 / m 96 / s 40 / card 24 px (the first three are fluid). */
  size?: DisplaySize;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  align?: 'left' | 'center';
  className?: string;
  id?: string;
}

/** Krylon display heading: always uppercase, line-height 1. */
function DisplayTitle({
  children,
  size = 'm',
  as: Tag = 'h2',
  align = 'left',
  className,
  id,
}: DisplayTitleProps) {
  return (
    <Tag
      id={id}
      className={[styles.title, styles[size], align === 'center' && styles.center, className]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  );
}

export default DisplayTitle;
