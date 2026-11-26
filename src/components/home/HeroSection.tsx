import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Gradient stand-in for the future background video. */}
      <div className={styles.media} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <Reveal className={styles.content}>
          <span className={`eyebrow ${styles.eyebrow}`}>Maipú · Mendoza · Desde 1912</span>
          <h1 id="hero-title" className={styles.title}>
            La tierra que hizo el vino, y el vino que hizo la casa.
          </h1>
          <div className={styles.actions}>
            <Button to="/reservas" tone="onDark">
              Reservar visita
            </Button>
            <a href="#historia" className={styles.textLink}>
              Nuestra historia
            </a>
          </div>
        </Reveal>

        <a href="#historia" className={styles.scrollCue} aria-hidden="true" tabIndex={-1}>
          <span>Desplazate</span>
          <span className={styles.scrollLine} />
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
