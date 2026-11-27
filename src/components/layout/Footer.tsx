import { Link } from 'react-router';
import logoWhite from '@/assets/brand/logo-white.png';
import Reveal from '@/components/ui/Reveal';
import { contactReasons, emails, locations } from '@/data/contact';
import { wineCategories } from '@/data/wineCategories';
import { INSTAGRAM_VINOTECA_URL, TIENDA_URL } from '@/services/links';
import styles from './Footer.module.css';

const bodega = locations[0];
const phone = contactReasons.find((reason) => reason.id === 'turismo')?.whatsapp;
const address = bodega ? `${bodega.address}, ${bodega.city}` : '';
const year = new Date().getFullYear();

type FooterLink = { label: string; to?: string; href?: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Vinos',
    links: wineCategories.map(({ id, label }) => ({ label, to: `/vinos?linea=${id}` })),
  },
  {
    title: 'Visitanos',
    links: [
      { label: 'Enoturismo', to: '/enoturismo' },
      { label: 'Reservas', to: '/reservas' },
      { label: 'Contacto', to: '/contacto' },
    ],
  },
  {
    title: 'Tienda',
    links: [
      { label: 'Tienda online ↗', href: TIENDA_URL },
      { label: 'Mayoristas', to: '/contacto?motivo=mayorista' },
      { label: 'Instagram vinoteca ↗', href: INSTAGRAM_VINOTECA_URL },
    ],
  },
];

function PhoneIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

/** R3 footer: contact on the left; logo and three link columns on the right; legal line below. */
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <Reveal className={styles.contact}>
          <ul className={styles.contactList}>
            {phone && (
              <li>
                <a href={`tel:${phone}`} className={styles.contactItem}>
                  <span className={styles.icon} aria-hidden="true">
                    <PhoneIcon />
                  </span>
                  {phone}
                </a>
              </li>
            )}
            {bodega && (
              <li>
                <a
                  href={bodega.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className={styles.contactItem}
                >
                  <span className={styles.icon} aria-hidden="true">
                    <PinIcon />
                  </span>
                  {address}
                </a>
              </li>
            )}
            <li>
              <a href={`mailto:${emails.minorista}`} className={styles.contactItem}>
                <span className={styles.icon} aria-hidden="true">
                  <MailIcon />
                </span>
                {emails.minorista}
              </a>
            </li>
          </ul>
        </Reveal>

        <div className={styles.right}>
          <Reveal>
            <Link to="/" className={styles.logo} aria-label="Bodega Florio, inicio">
              <img src={logoWhite} alt="" width={410} height={140} />
            </Link>
          </Reveal>

          <div className={styles.columns}>
            {columns.map(({ title, links }, i) => (
              <Reveal key={title} delay={120 + i * 100} className={styles.column}>
                <h2 className={styles.heading}>{title}</h2>
                <ul className={styles.list}>
                  {links.map(({ label, to, href }) => (
                    <li key={label}>
                      {to ? (
                        <Link to={to}>{label}</Link>
                      ) : (
                        <a href={href} target="_blank" rel="noopener">
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <p className={styles.legal}>
        <span>© {year} Bodega Florio</span>
        {address && <span>{address}</span>}
        <span>Beber con moderación. Prohibida su venta a menores de 18 años.</span>
      </p>
    </footer>
  );
}

export default Footer;
