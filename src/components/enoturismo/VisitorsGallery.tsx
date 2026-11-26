import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { visitorTestimonials } from '@/data/experience';
import styles from './VisitorsGallery.module.css';

// Warm placeholder gradients, one per tile (cycled if there are more visitors).
const gradients = [
  'linear-gradient(150deg, #cdb98a, #8a6f45)',
  'linear-gradient(160deg, #6b7a4a, #2c3319)',
  'linear-gradient(160deg, #a0523d, #4a1d14)',
  'linear-gradient(150deg, #b5aa98, #5f564a)',
  'linear-gradient(160deg, #6f0025, #360606)',
  'linear-gradient(150deg, #d4a373, #7a4b2a)',
  'linear-gradient(160deg, #765848, #3b3127)',
  'linear-gradient(150deg, #c08552, #5e3023)',
];

const gradientFor = (index: number) => gradients[index % gradients.length];

function VisitorsGallery() {
  const [active, setActive] = useState(0);
  const current = visitorTestimonials[active];
  const hasSamples = visitorTestimonials.some((visitor) => visitor.isSample);

  return (
    <section className={styles.section} aria-labelledby="visitantes-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Quienes nos visitaron"
            title={<span id="visitantes-title">Caras, historias y una copa compartida</span>}
          />
          <p className={styles.hint}>Tocá cualquier foto para conocer su historia.</p>
        </Reveal>

        <div className={styles.layout}>
          <ul className={styles.grid}>
            {visitorTestimonials.map(({ who }, index) => (
              <li key={who + index}>
                <button
                  type="button"
                  className={styles.tile}
                  style={{ background: gradientFor(index) }}
                  aria-pressed={active === index}
                  aria-label={`Ver la historia de: ${who}`}
                  onClick={() => setActive(index)}
                >
                  <span className={styles.tileLabel} aria-hidden="true">
                    [Foto: {who}]
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {current && (
            <div className={styles.spotlight} aria-live="polite">
              <figure key={active} className={styles.spotlightInner}>
                <div
                  className={styles.photo}
                  style={{ background: gradientFor(active) }}
                  role="img"
                  aria-label={`Foto de ${current.who}`}
                >
                  <span className={styles.tileLabel} aria-hidden="true">
                    [Foto: {current.who}]
                  </span>
                </div>
                <div>
                  <blockquote className={styles.quote}>
                    <p>“{current.quote}”</p>
                  </blockquote>
                  <figcaption className={styles.who}>{current.who}</figcaption>
                </div>
              </figure>
            </div>
          )}
        </div>

        {hasSamples && (
          <p className={styles.note}>
            Fotos y comentarios de ejemplo — se reemplazan por fotos y testimonios reales de
            visitantes (con su permiso) una vez que las tengamos.
          </p>
        )}
      </div>
    </section>
  );
}

export default VisitorsGallery;
