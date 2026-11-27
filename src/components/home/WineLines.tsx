import { Link } from 'react-router';
import RevealText from '@/components/ui/RevealText';
import Reveal from '@/components/ui/Reveal';
import { homeWineLines } from '@/data/home';
import { wineCategories } from '@/data/wineCategories';
import styles from './WineLines.module.css';

/** Provisional photo tones per line until the real images arrive. */
const tones: Record<string, string> = {
  generosos: 'linear-gradient(160deg, #8c6a3f, #3b2414)',
  espumante: 'linear-gradient(160deg, #b9b08a, #5d5638)',
  tintos: 'linear-gradient(160deg, #5a1424, #1f070d)',
  dulces: 'linear-gradient(160deg, #a8703c, #4a2a12)',
  industriales: 'linear-gradient(160deg, #6f6a60, #2f2c27)',
};

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Bordeaux section with the five wine lines as an accordion: the hovered or focused card grows
 * (flex 1 -> 2.8) while the others shrink. On mobile the cards are stacked and fully shown.
 */
function WineLines() {
  return (
    <section className={styles.section} aria-labelledby="home-lines-title">
      <RevealText
        as="h2"
        id="home-lines-title"
        className={styles.title}
        lines={homeWineLines.titleLines}
      />

      <Reveal className={styles.cards}>
        {wineCategories.map(({ id, label }, i) => (
          <Link
            key={id}
            to={`/vinos?linea=${id}`}
            className={styles.card}
            style={{ backgroundImage: tones[id] }}
          >
            <span className={styles.restName} aria-hidden="true">
              {label}
            </span>
            <span className={styles.details}>
              <span className={styles.eyebrow}>
                {homeWineLines.eyebrow} {pad(i + 1)}
              </span>
              <span className={styles.name}>{label}</span>
              <span className={styles.cta}>{homeWineLines.cta}</span>
            </span>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}

export default WineLines;
