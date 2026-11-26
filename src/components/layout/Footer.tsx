import { Link } from 'react-router';
import logoWhite from '@/assets/brand/logo-white.png';
import { contactReasons, emails, locations } from '@/data/contact';
import { INSTAGRAM_VINOTECA_URL } from '@/services/links';
import styles from './Footer.module.css';

const navLinks = [
  { to: '/enoturismo', label: 'Enoturismo' },
  { to: '/vinos', label: 'Vinos' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/contacto', label: 'Contacto' },
];

const bodega = locations[0];
const turismoPhone = contactReasons.find((reason) => reason.id === 'turismo')?.whatsapp;
const instagram = locations.find((location) => location.instagram)?.instagram;
const year = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.col}>
          <Link to="/" className={styles.logo}>
            <img src={logoWhite} alt="Bodega Florio" width={410} height={140} />
          </Link>
          <p className={styles.tagline}>Bodega Florio - Maipú, Mendoza, desde 1912</p>
        </div>

        <div className={`${styles.col} ${styles.narrow}`}>
          <h2 className={styles.heading}>Navegación</h2>
          <ul className={styles.list}>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2 className={styles.heading}>Contacto</h2>
          <ul className={styles.list}>
            {bodega && (
              <li>
                {bodega.address}, {bodega.city}
              </li>
            )}
            {turismoPhone && (
              <li>
                <a href={`tel:${turismoPhone}`}>{turismoPhone}</a>
              </li>
            )}
            <li>
              <a href={`mailto:${emails.minorista}`}>{emails.minorista}</a>
            </li>
          </ul>
        </div>

        {instagram && (
          <div className={`${styles.col} ${styles.narrow}`}>
            <h2 className={styles.heading}>Seguinos</h2>
            <ul className={styles.list}>
              <li>
                <a href={INSTAGRAM_VINOTECA_URL} target="_blank" rel="noopener">
                  Instagram {instagram}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <p className={styles.copyright}>© {year} Bodega Florio. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
