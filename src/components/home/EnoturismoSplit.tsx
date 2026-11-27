import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import RevealText from '@/components/ui/RevealText';
import { homeEnoturismo } from '@/data/home';
import styles from './EnoturismoSplit.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

function Arrow({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/** 50/50: text on white on the left, a full-height looping photo slider on the right. */
function EnoturismoSplit() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [index, setIndex] = useState(0);
  const total = homeEnoturismo.slides.length;

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    onSelect();
    embla.on('select', onSelect);
    return () => {
      embla.off('select', onSelect);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section className={styles.split} aria-labelledby="home-enoturismo-title">
      <div className={styles.text}>
        <RevealText
          as="h2"
          id="home-enoturismo-title"
          className={styles.title}
          lines={homeEnoturismo.titleLines}
        />
        <Reveal className={styles.body}>
          <Button to={homeEnoturismo.cta.to}>{homeEnoturismo.cta.label}</Button>
          <p>{homeEnoturismo.text}</p>
        </Reveal>
      </div>

      <div
        className={styles.slider}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Fotos de la bodega"
      >
        <div className={styles.viewport} ref={emblaRef}>
          <div className={styles.track}>
            {homeEnoturismo.slides.map((label, i) => (
              <div
                key={label}
                className={styles.slide}
                role="group"
                aria-roledescription="foto"
                aria-label={`${i + 1} de ${total}`}
              >
                <ImagePlaceholder label={label} ratio="auto" className={styles.photo} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.controls}>
          <span className={styles.counter} aria-live="polite">
            {pad(index + 1)}/{pad(total)}
          </span>
          <IconButton label="Foto anterior" onClick={prev}>
            <Arrow flip />
          </IconButton>
          <IconButton label="Foto siguiente" onClick={next}>
            <Arrow />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

export default EnoturismoSplit;
