import Reveal from '@/components/ui/Reveal';
import styles from './Intro.module.css';

function Intro() {
  return (
    <section className={styles.section} aria-label="Introducción">
      <div className="container">
        <Reveal>
          <p className={styles.text}>
            Una caminata entre los viñedos, el recorrido por el proceso productivo, una degustación
            guiada de nuestros estilos y la historia de la familia Florio — todo en una sola visita.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Intro;
