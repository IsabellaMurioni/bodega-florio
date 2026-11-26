import Reveal from '@/components/ui/Reveal';
import { experienceSteps } from '@/data/experience';
import styles from './ExperienceSteps.module.css';

function ExperienceSteps() {
  return (
    <section className={styles.section} aria-labelledby="experiencia-title">
      <div className="container">
        <Reveal>
          <h2 id="experiencia-title" className={`eyebrow ${styles.eyebrow}`}>
            La experiencia incluye
          </h2>
        </Reveal>

        <ol className={styles.steps}>
          {experienceSteps.map(({ n, title, text }, index) => (
            <li key={n}>
              <Reveal delay={index * 120} className={styles.step}>
                <span className={styles.number} aria-hidden="true">
                  {n}
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

export default ExperienceSteps;
