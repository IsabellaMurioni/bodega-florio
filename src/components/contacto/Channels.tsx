import Reveal from '@/components/ui/Reveal';
import { contactReasons, emails, locations } from '@/data/contact';
import { INSTAGRAM_VINOTECA_URL } from '@/services/links';
import styles from './Channels.module.css';

const instagram = locations.find((location) => location.instagram)?.instagram;

const emailList = [
  { label: 'Venta minorista', address: emails.minorista },
  { label: 'Venta mayorista', address: emails.mayorista },
];

function Channels() {
  return (
    <section className={styles.section} aria-label="Canales de contacto">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.column}>
          <h2 className={styles.title}>Teléfonos</h2>
          <dl className={styles.list}>
            {contactReasons.map(({ id, label, whatsapp }) => (
              <div key={id}>
                <dt>{label}</dt>
                <dd>
                  <a href={`tel:${whatsapp}`}>{whatsapp}</a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className={styles.column} delay={100}>
          <h2 className={styles.title}>Emails</h2>
          <dl className={styles.list}>
            {emailList.map(({ label, address }) => (
              <div key={address}>
                <dt>{label}</dt>
                <dd>
                  <a href={`mailto:${address}`}>{address}</a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {instagram && (
          <Reveal className={styles.column} delay={200}>
            <h2 className={styles.title}>Seguinos</h2>
            <dl className={styles.list}>
              <div>
                <dt>Instagram</dt>
                <dd>
                  <a href={INSTAGRAM_VINOTECA_URL} target="_blank" rel="noopener">
                    {instagram}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export default Channels;
