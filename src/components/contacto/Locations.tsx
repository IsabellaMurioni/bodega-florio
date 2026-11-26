import Reveal from '@/components/ui/Reveal';
import { locations } from '@/data/contact';
import { INSTAGRAM_VINOTECA_URL } from '@/services/links';
import styles from './Locations.module.css';

// Column headings per location (copy from the design canvas).
const headings: Record<string, string> = {
  'Bodega Florio': 'La bodega — Mendoza',
  'Vinoteca Florio': 'Vinoteca — Buenos Aires',
};

// Items still to be confirmed with the winery; marked only in dev.
const pending: Record<string, ('address' | 'hours')[]> = {
  'Bodega Florio': ['address', 'hours'],
};

function Pending({ name, field }: { name: string; field: 'address' | 'hours' }) {
  if (!import.meta.env.DEV || !pending[name]?.includes(field)) return null;
  return <span className={styles.pending}> (a confirmar)</span>;
}

function Locations() {
  return (
    <section className={styles.section} aria-label="Dónde encontrarnos">
      <div className={`container ${styles.grid}`}>
        {locations.map((location, index) => (
          <Reveal key={location.name} delay={index * 120} className={styles.column}>
            <h2 className={styles.title}>{headings[location.name] ?? location.name}</h2>
            <p className={styles.address}>
              {location.address}, {location.city}
              <Pending name={location.name} field="address" />
            </p>
            {location.hours && (
              <p className={styles.hours}>
                {location.hours}
                <Pending name={location.name} field="hours" />
              </p>
            )}
            {location.mapsUrl && (
              <a href={location.mapsUrl} target="_blank" rel="noopener" className={styles.link}>
                Ver en el mapa →
              </a>
            )}
            {location.instagram && (
              <a
                href={INSTAGRAM_VINOTECA_URL}
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Instagram {location.instagram} →
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Locations;
