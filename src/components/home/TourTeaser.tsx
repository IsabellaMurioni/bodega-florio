import { Link } from 'react-router';
import ImagePlaceholder, { type PlaceholderTone } from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './TourTeaser.module.css';

const photos: { label: string; tone: PlaceholderTone; ratio: string; className: string }[] = [
  { label: 'El viñedo', tone: 'vineyard', ratio: '4 / 5', className: styles.a },
  { label: 'La bodega', tone: 'stone', ratio: '1 / 1', className: styles.b },
  { label: 'El comedor', tone: 'gold', ratio: '4 / 3', className: styles.c },
  { label: 'Nuestra gente', tone: 'bordeaux', ratio: '3 / 4', className: styles.d },
];

function TourTeaser() {
  return (
    <section className={styles.section} aria-labelledby="recorrido-title">
      <div className="container">
        <div className={styles.header}>
          <Reveal>
            <SectionHeading
              eyebrow="El recorrido"
              title={<span id="recorrido-title">Una bodega para descubrir</span>}
            />
          </Reveal>
          <Reveal delay={100}>
            <Link to="/enoturismo" className={styles.link}>
              Descubrí el enoturismo →
            </Link>
          </Reveal>
        </div>

        <div className={styles.collage}>
          {photos.map(({ label, tone, ratio, className }, index) => (
            <Reveal key={label} delay={index * 100} className={`${styles.photo} ${className}`}>
              <figure>
                <ImagePlaceholder label={label} tone={tone} ratio={ratio} />
                <figcaption className={styles.caption}>{label}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TourTeaser;
