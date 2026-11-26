import type { ReactNode } from 'react';
import Reveal from '@/components/ui/Reveal';
import styles from './IntroText.module.css';

/** Large italic bordeaux intro paragraph used under inner-page heroes. */
function IntroText({ children }: { children: ReactNode }) {
  return (
    <section className={styles.section} aria-label="Introducción">
      <div className="container">
        <Reveal>
          <p className={styles.text}>{children}</p>
        </Reveal>
      </div>
    </section>
  );
}

export default IntroText;
