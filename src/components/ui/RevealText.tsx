import { useRef, type ReactNode } from 'react';
import { domAnimation, LazyMotion, useInView, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
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

/** --ease-curtain and --dur-base from tokens.css. */
const EASE_CURTAIN = [0.68, 0.09, 0, 0.97] as const;
const DURATION = 1;

/* Hidden: the line is clipped away from the top and pushed down a little. Shown: the clip box is
   slightly larger than the line so descenders and Krylon accents are never cut. */
const HIDDEN_CLIP = 'inset(0% 0% 100% 0%)';
const SHOWN_CLIP = 'inset(-20% -10% -25% -10%)';

/**
 * Line-mask reveal (Motion): when the block enters the viewport each line wipes in from the
 * bottom (clip-path) while sliding up. With prefers-reduced-motion the text is shown immediately.
 */
function RevealText({
  lines,
  as: Tag = 'div',
  className,
  delay = 0,
  stagger = 90,
  id,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduceMotion = useReducedMotion();

  return (
    // The polymorphic tag accepts any HTMLElement ref.
    <LazyMotion features={domAnimation} strict>
      <Tag ref={ref as never} id={id} className={className}>
        {lines.map((line, i) =>
          reduceMotion ? (
            <span key={i} className={styles.line}>
              {line}
            </span>
          ) : (
            <m.span
              key={i}
              className={styles.line}
              initial={{ clipPath: HIDDEN_CLIP }}
              animate={{ clipPath: inView ? SHOWN_CLIP : HIDDEN_CLIP }}
              transition={{
                duration: DURATION,
                ease: EASE_CURTAIN,
                delay: (delay + i * stagger) / 1000,
              }}
            >
              <m.span
                className={styles.inner}
                initial={{ y: '35%' }}
                animate={{ y: inView ? '0%' : '35%' }}
                transition={{
                  duration: DURATION,
                  ease: EASE_CURTAIN,
                  delay: (delay + i * stagger) / 1000,
                }}
              >
                {line}
              </m.span>
            </m.span>
          ),
        )}
      </Tag>
    </LazyMotion>
  );
}

export default RevealText;
