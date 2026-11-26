import Reveal from '@/components/ui/Reveal';
import { commitments } from '@/data/home';
import styles from './CommitmentsTimeline.module.css';

function CommitmentsTimeline() {
  return (
    <section className={styles.section} aria-labelledby="compromisos-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.heading}>
          <h2 id="compromisos-title">Nuestros compromisos</h2>
        </Reveal>

        <ol className={styles.timeline}>
          {commitments.map(({ title, text }, index) => (
            <li key={title} className={styles.item}>
              <Reveal delay={index * 120}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.text}>{text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default CommitmentsTimeline;
