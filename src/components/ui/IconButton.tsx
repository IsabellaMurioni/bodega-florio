import type { ComponentProps, ReactNode } from 'react';
import styles from './IconButton.module.css';

interface IconButtonProps extends Omit<ComponentProps<'button'>, 'children'> {
  /** Accessible name (the icon itself is decorative). */
  label: string;
  /** light = white disc, dark = bordeaux-dark disc, outline = thin ring in currentColor. */
  variant?: 'light' | 'dark' | 'outline';
  children: ReactNode;
}

/** Round 60px icon button for slider arrows and close. */
function IconButton({ label, variant = 'light', className, children, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      {...rest}
      className={[styles.iconButton, styles[variant], className].filter(Boolean).join(' ')}
    >
      <span aria-hidden="true" className={styles.icon}>
        {children}
      </span>
    </button>
  );
}

export default IconButton;
