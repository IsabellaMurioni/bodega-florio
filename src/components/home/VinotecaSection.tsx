import ImagePlaceholder, { type PlaceholderTone } from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import { locations } from '@/data/contact';
import { INSTAGRAM_VINOTECA_URL } from '@/services/links';
import styles from './VinotecaSection.module.css';

const vinoteca = locations.find((location) => location.name === 'Vinoteca Florio');

const polaroids: { label: string; tone: PlaceholderTone; className: string }[] = [
  { label: 'La fachada', tone: 'stone', className: styles.p1 },
  { label: 'Nuestra selección', tone: 'bordeaux', className: styles.p2 },
  { label: 'La Boca', tone: 'gold', className: styles.p3 },
];

function VinotecaSection() {
  return (
    <section className={styles.section} aria-labelledby="vinoteca-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.text}>
          <span className={`eyebrow ${styles.eyebrow}`}>También en Buenos Aires</span>
          <h2 id="vinoteca-title">Vinoteca Florio, en La Boca</h2>
          {vinoteca && (
            <dl className={styles.details}>
              <div>
                <dt>Dirección</dt>
                <dd>
                  {vinoteca.address}, {vinoteca.city}
                </dd>
              </div>
              {vinoteca.hours && (
                <div>
                  <dt>Horario</dt>
                  <dd>{vinoteca.hours}</dd>
                </div>
              )}
            </dl>
          )}
          <a href={INSTAGRAM_VINOTECA_URL} target="_blank" rel="noopener" className={styles.link}>
            Conocé la vinoteca →
          </a>
        </Reveal>

        <Reveal className={styles.collage} delay={150}>
          {polaroids.map(({ label, tone, className }) => (
            <figure key={label} className={`${styles.polaroid} ${className}`}>
              <ImagePlaceholder label={label} tone={tone} ratio="1 / 1" />
              <figcaption>{label}</figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default VinotecaSection;
