import Reveal from '@/components/ui/Reveal';
import { visitHours } from '@/data/experience';
import styles from './HoursAndPrice.module.css';

function HoursAndPrice() {
  return (
    <section className={styles.section} aria-label="Horarios, duración y precio">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.col}>
          <h2 className={styles.title}>Horarios</h2>
          <p>{visitHours.days}</p>
          <p>{visitHours.languages}</p>
          <p className={styles.note}>(domingo: a confirmar)</p>
        </Reveal>

        <Reveal className={styles.col} delay={120}>
          <h2 className={styles.title}>Duración y precio</h2>
          <p className={styles.pending}>A confirmar</p>
        </Reveal>
      </div>
    </section>
  );
}

export default HoursAndPrice;
