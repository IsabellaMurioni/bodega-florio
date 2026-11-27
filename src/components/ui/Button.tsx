import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';
import styles from './Button.module.css';

export type ButtonVariant = 'bordeaux' | 'white' | 'outline';

interface CommonProps {
  /** bordeaux = filled bordeaux, white = filled white, outline = thin border in currentColor. */
  variant?: ButtonVariant;
  /** Legacy (pre-redesign) prop: onLight -> bordeaux, onDark -> white. */
  tone?: 'onDark' | 'onLight';
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  (
    | { to: string; href?: never }
    | { href: string; to?: never }
    | ({ to?: never; href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
  );

/**
 * R0 button: 2.5px radius, 10px uppercase label with 2.5px tracking. On hover/focus an inverted
 * copy of the label wipes in from the left (clip-path). Renders a router Link for `to`, an
 * external link (new tab) for `href`, or a <button> otherwise.
 */
function Button(props: ButtonProps) {
  const { tone, className, children } = props;
  const variant = props.variant ?? (tone === 'onDark' ? 'white' : 'bordeaux');
  const classes = [styles.button, styles[variant], className].filter(Boolean).join(' ');
  const inner = (
    <>
      <span className={styles.label}>{children}</span>
      <span className={styles.wipe} aria-hidden="true">
        <span className={styles.label}>{children}</span>
      </span>
    </>
  );

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {inner}
      </Link>
    );
  }

  if (props.href !== undefined) {
    return (
      <a href={props.href} target="_blank" rel="noopener" className={classes}>
        {inner}
      </a>
    );
  }

  const {
    variant: _variant,
    tone: _tone,
    className: _className,
    children: _children,
    ...buttonProps
  } = props;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {inner}
    </button>
  );
}

export default Button;
