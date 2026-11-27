import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Pill.module.css';

interface PillProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Selected state (rendered as aria-pressed). */
  active?: boolean;
  /** Optional leading icon in a white disc. */
  icon?: ReactNode;
  children: ReactNode;
}

/** Rounded toggle / filter chip. */
function Pill({ active = false, icon, className, children, ...rest }: PillProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      {...rest}
      className={[styles.pill, active && styles.active, className].filter(Boolean).join(' ')}
    >
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

export default Pill;
