import type { ReactNode } from 'react';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

function SectionHeading({ eyebrow, title, intro, align = 'left', className }: SectionHeadingProps) {
  return (
    <header
      className={[styles.heading, align === 'center' && styles.center, className]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  );
}

export default SectionHeading;
