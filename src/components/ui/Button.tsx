import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router';

type Tone = 'onDark' | 'onLight';

interface CommonProps {
  /** Background the button sits on (default onLight). */
  tone?: Tone;
  className?: string;
  children: ReactNode;
}

type ButtonProps = CommonProps &
  (
    | { to: string; href?: never }
    | { href: string; to?: never }
    | ({ to?: never; href?: never } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>)
  );

const toneClass: Record<Tone, string> = {
  onDark: 'btn-glass--on-dark',
  onLight: 'btn-glass--on-light',
};

/**
 * Glass button. Renders a router Link for `to`, an external link (new tab) for `href`,
 * or a <button> otherwise.
 */
function Button(props: ButtonProps) {
  const { tone = 'onLight', className, children } = props;
  const classes = ['btn-glass', toneClass[tone], className].filter(Boolean).join(' ');

  if (props.to !== undefined) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  if (props.href !== undefined) {
    return (
      <a href={props.href} target="_blank" rel="noopener" className={classes}>
        {children}
      </a>
    );
  }

  const { tone: _tone, className: _className, children: _children, ...buttonProps } = props;
  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}

export default Button;
