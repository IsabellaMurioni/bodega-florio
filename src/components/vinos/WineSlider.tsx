import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import BottlePlaceholder from '@/components/ui/BottlePlaceholder';
import Button from '@/components/ui/Button';
import { wineCategories } from '@/data/wineCategories';
import { getBuyLink } from '@/services/wines';
import type { Wine } from '@/types';
import styles from './WineSlider.module.css';

const lineLabel = (wine: Wine) =>
  wineCategories.find((category) => category.id === wine.category)?.label ?? '';

function EyeIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

/**
 * Bottle slider: about three bottles visible, the centered one at full size, the others scaled
 * down and dimmed. Draggable, arrow keys, dots and a counter; below, the active wine's name, line
 * and "Comprar". On desktop a 60px white "eye" circle follows the pointer over the bottles.
 */
function WineSlider({ wines }: { wines: Wine[] }) {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'center', loop: wines.length > 2 });
  const [index, setIndex] = useState(0);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const active = wines[index] ?? wines[0];

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    onSelect();
    embla.on('select', onSelect);
    embla.on('reInit', onSelect);
    return () => {
      embla.off('select', onSelect);
      embla.off('reInit', onSelect);
    };
  }, [embla]);

  const onKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        embla?.scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        embla?.scrollNext();
      }
    },
    [embla],
  );

  // Custom cursor: moved with a transform, no re-render.
  const moveCursor = (event: PointerEvent<HTMLDivElement>) => {
    const cursor = cursorRef.current;
    if (!cursor || event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    cursor.style.transform = `translate(${event.clientX - rect.left - 30}px, ${event.clientY - rect.top - 30}px)`;
    cursor.dataset.visible = 'true';
  };
  const hideCursor = () => {
    if (cursorRef.current) cursorRef.current.dataset.visible = 'false';
  };

  if (!active) return null;
  const buy = getBuyLink(active);

  return (
    <div className={styles.slider}>
      <div
        className={styles.stage}
        onPointerMove={moveCursor}
        onPointerLeave={hideCursor}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Vinos"
      >
        <div
          ref={emblaRef}
          className={styles.viewport}
          tabIndex={0}
          onKeyDown={onKeyDown}
          aria-label="Usá las flechas para recorrer los vinos"
        >
          <div className={styles.track}>
            {wines.map((wine, i) => (
              <div
                key={wine.id}
                className={i === index ? `${styles.slide} ${styles.current}` : styles.slide}
                role="group"
                aria-roledescription="vino"
                aria-label={`${wine.name}, ${i + 1} de ${wines.length}`}
                onClick={() => embla?.scrollTo(i)}
              >
                <BottlePlaceholder
                  label={wine.name}
                  height={420}
                  color={i % 2 ? 'var(--color-bordeaux)' : 'var(--color-bordeaux-dark)'}
                  className={styles.bottle}
                />
              </div>
            ))}
          </div>
        </div>
        <span ref={cursorRef} className={styles.cursor} aria-hidden="true" data-visible="false">
          <EyeIcon />
        </span>
      </div>

      <div className={styles.dots} role="group" aria-label="Elegir vino">
        {wines.map((wine, i) => (
          <button
            key={wine.id}
            type="button"
            className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
            aria-label={wine.name}
            aria-current={i === index}
            onClick={() => embla?.scrollTo(i)}
          />
        ))}
      </div>

      <div className={styles.info} aria-live="polite">
        <span className={styles.counter}>
          {index + 1}/{wines.length}
        </span>
        <p className={styles.name}>{active.name}</p>
        <p className={styles.line}>{lineLabel(active)}</p>
        {buy.to ? (
          <Button to={buy.to}>Consultar</Button>
        ) : (
          <Button href={buy.href ?? ''}>Comprar</Button>
        )}
      </div>
    </div>
  );
}

export default WineSlider;
