import { useRef } from 'react';
import BottlePlaceholder from '@/components/ui/BottlePlaceholder';
import Eyebrow from '@/components/ui/Eyebrow';
import Reveal from '@/components/ui/Reveal';
import RevealText from '@/components/ui/RevealText';
import { homePassion } from '@/data/home';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './PassionBand.module.css';

/**
 * Soft band with a giant title and three floating bottles at different parallax speeds:
 * a large one over the letters in the center, two smaller ones on grey discs (left low, right high).
 */
function PassionBand() {
  const ref = useRef<HTMLElement>(null);
  useScrollProgress(ref, 'pass');
  const [center, left, right] = homePassion.bottles;

  return (
    <>
      <section ref={ref} className={styles.band} aria-labelledby="home-passion-title">
        <div className={styles.stage}>
          <RevealText
            as="h2"
            id="home-passion-title"
            className={styles.title}
            lines={homePassion.titleLines}
          />

          <div className={`${styles.bottle} ${styles.center}`}>
            <BottlePlaceholder label={center ?? ''} height={440} />
          </div>
          <div className={`${styles.bottle} ${styles.disc} ${styles.left}`}>
            <BottlePlaceholder label={left ?? ''} height={210} color="var(--color-bordeaux)" />
          </div>
          <div className={`${styles.bottle} ${styles.disc} ${styles.right}`}>
            <BottlePlaceholder label={right ?? ''} height={210} />
          </div>
        </div>

        <Reveal className={styles.copy}>
          <Eyebrow className={styles.eyebrow}>{homePassion.eyebrow}</Eyebrow>
          <p>{homePassion.text}</p>
        </Reveal>
      </section>
    </>
  );
}

export default PassionBand;
