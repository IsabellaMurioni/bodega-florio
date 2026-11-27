import { useRef } from 'react';
import { LazyMotion, useReducedMotion } from 'motion/react';
import * as m from 'motion/react-m';
import { loadMotionFeatures } from '@/services/loadMotionFeatures';
import Button from '@/components/ui/Button';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import { homeHero } from '@/data/home';
import { useIntro } from '@/hooks/useIntro';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './HomeHero.module.css';

const EASE_CURTAIN = [0.68, 0.09, 0, 0.97] as const;

/**
 * Pinned hero (~140vh): the photo and the three words stay on screen while the section scrolls.
 * Split parallax: the first two words rise faster than the photo, the third stays lower.
 * The words enter once the loader is gone. Followed by a bordeaux band.
 */
function HomeHero() {
  const ref = useRef<HTMLElement>(null);
  const introDone = useIntro();
  const reduceMotion = useReducedMotion() ?? false;
  useScrollProgress(ref, 'pin');
  const [first, second, third] = homeHero.words;

  const enter = (i: number) => ({
    initial: reduceMotion ? false : { clipPath: 'inset(0% 0% 100% 0%)', y: '30%' },
    animate:
      introDone || reduceMotion
        ? { clipPath: 'inset(-20% -10% -25% -10%)', y: '0%' }
        : { clipPath: 'inset(0% 0% 100% 0%)', y: '30%' },
    transition: { duration: 1.2, ease: EASE_CURTAIN, delay: 0.1 + i * 0.12 },
  });

  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <section ref={ref} className={styles.hero} aria-labelledby="home-hero-title">
        <div className={styles.sticky}>
          <div className={styles.media}>
            <ImagePlaceholder label={homeHero.photoLabel} ratio="auto" className={styles.image} />
          </div>

          {/* Accessible title; the big words below are its visual version. */}
          <h1 id="home-hero-title" className="visually-hidden">
            {first} {second}, {third}
          </h1>

          <div className={styles.content} aria-hidden="true">
            <div className={styles.lead}>
              <span className={styles.pair}>
                <m.span className={styles.word} {...enter(0)}>
                  {first}
                </m.span>
                <m.span className={styles.word} {...enter(1)}>
                  {second}
                </m.span>
              </span>
              <m.p
                className={styles.text}
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: introDone || reduceMotion ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {homeHero.text}
              </m.p>
            </div>
            <span className={styles.third}>
              <m.span className={styles.word} {...enter(2)}>
                {third}
              </m.span>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.band} aria-label={homeHero.band.title}>
        <h2 className={styles.bandTitle}>{homeHero.band.title}</h2>
        <Button variant="outline" to={homeHero.band.cta.to}>
          {homeHero.band.cta.label}
        </Button>
      </section>
    </LazyMotion>
  );
}

export default HomeHero;
