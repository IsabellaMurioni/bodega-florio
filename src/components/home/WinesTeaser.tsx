import { Link } from 'react-router';
import Reveal from '@/components/ui/Reveal';
import { wineCategories } from '@/data/wineCategories';
import styles from './WinesTeaser.module.css';

function WinesTeaser() {
  return (
    <section className={styles.section} aria-labelledby="vinos-title">
      <span className={styles.bigNumber} aria-hidden="true">
        22
      </span>

      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.intro}>
          <span className={`eyebrow ${styles.eyebrow}`}>Nuestra línea propia</span>
          <h2 id="vinos-title">Veintidós etiquetas, un mismo oficio</h2>
          <p className={styles.lead}>
            De los generosos que nos dieron nombre a los varietales de guarda, cada vino de la
            familia Florio se elabora en pequeños lotes, pensado para acompañar una mesa o una
            sobremesa larga.
          </p>
          <Link to="/vinos" className={styles.link}>
            Ver el catálogo completo →
          </Link>
        </Reveal>

        <ol className={styles.list}>
          {wineCategories.map(({ id, label }, index) => (
            <li key={id}>
              <Reveal delay={index * 80} className={styles.item}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.name}>{label}</span>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default WinesTeaser;
