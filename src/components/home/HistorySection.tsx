import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import styles from './HistorySection.module.css';

function HistorySection() {
  return (
    <section id="historia" className={styles.section} aria-labelledby="historia-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.text}>
          <span className={`eyebrow ${styles.eyebrow}`}>Nuestros orígenes — 1912</span>
          <h2 id="historia-title" className={styles.lead}>
            Antonio Florio cruzó el océano con un oficio de generaciones y lo sembró en Cruz de
            Piedra.
          </h2>
          <div className={styles.body}>
            <p>
              Con los años, dos familias argentinas se sumaron al proyecto y ampliaron la mirada
              hacia nuevos estilos: dulces naturales, varietales de guarda y espumantes.
            </p>
            <p>
              Más de cien años después, seguimos eligiendo el mismo camino: tiempo, oficio y la
              tierra como punto de partida.
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.media} delay={150}>
          <ImagePlaceholder label="fachada histórica de la bodega" tone="stone" ratio="4 / 5" />
          <span className={styles.year} aria-hidden="true">
            1912
          </span>
        </Reveal>
      </div>
    </section>
  );
}

export default HistorySection;
