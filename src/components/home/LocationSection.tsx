import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import { BODEGA_MAPS_URL } from '@/services/links';
import styles from './LocationSection.module.css';

function LocationSection() {
  return (
    <section className={styles.section} aria-labelledby="ubicacion-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.map}>
          {/* TODO: replace with the map embed once the exact address is confirmed. */}
          <ImagePlaceholder
            kind="Mapa"
            label="Cruz de Piedra, Maipú"
            tone="vineyard"
            ratio="16 / 10"
          />
        </Reveal>

        <Reveal className={styles.text} delay={120}>
          <span className={`eyebrow ${styles.eyebrow}`}>Cómo llegar</span>
          <h2 id="ubicacion-title">La bodega, en Cruz de Piedra</h2>
          <p className={styles.body}>
            Cruz de Piedra, Maipú, Mendoza — a minutos de la Ciudad y con la Cordillera de fondo.
          </p>
          <a href={BODEGA_MAPS_URL} target="_blank" rel="noopener" className={styles.link}>
            Ver en el mapa →
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default LocationSection;
