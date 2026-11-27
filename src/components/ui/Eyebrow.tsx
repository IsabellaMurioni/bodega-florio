import type { ReactNode } from 'react';
import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
  as?: 'span' | 'p';
  className?: string;
}

/** Small uppercase label (10-12px, 0.2em tracking) above titles and on cards. */
function Eyebrow({ children, as: Tag = 'span', className }: EyebrowProps) {
  return <Tag className={[styles.eyebrow, className].filter(Boolean).join(' ')}>{children}</Tag>;
}

export default Eyebrow;
