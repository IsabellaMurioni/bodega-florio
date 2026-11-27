import { useEffect, useRef, type CSSProperties } from 'react';
import { Link, NavLink } from 'react-router';
import logoWhite from '@/assets/brand/logo-white.png';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import { contactReasons, emails, locations } from '@/data/contact';
import { INSTAGRAM_VINOTECA_URL, TIENDA_URL } from '@/services/links';
import { lockScroll, unlockScroll } from '@/services/smoothScroll';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import styles from './SiteMenu.module.css';

export const MENU_ID = 'site-menu';

/** Main items. `chip` is the provisional image shown inside the word on hover. */
const items = [
  { to: '/enoturismo', word: 'Enoturismo', chip: 'linear-gradient(150deg, #8a8f6a, #3f4a2c)' },
  { to: '/vinos', word: 'Vinos', chip: 'linear-gradient(150deg, #7a2236, #2c0a12)' },
  { to: '/reservas', word: 'Reservas', chip: 'linear-gradient(150deg, #c9b9a3, #6e5a45)' },
  { to: '/contacto', word: 'Contacto', chip: 'linear-gradient(150deg, #b5aa98, #5f564a)' },
];

const turismo = contactReasons.find((reason) => reason.id === 'turismo');
const whatsappUrl = buildWhatsAppUrl(
  turismo?.whatsapp ?? '',
  'Hola, quisiera hacer una reserva en Bodega Florio.',
);
const bodega = locations[0];

const pad = (n: number) => String(n).padStart(2, '0');

/** Splits a word in two halves so the hover chip can open in the middle of it. */
const splitWord = (word: string) => {
  const cut = Math.ceil(word.length / 2);
  return [word.slice(0, cut), word.slice(cut)] as const;
};

function Close() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <path d="M4 4l16 16M20 4 4 20" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

interface SiteMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

/**
 * Full-screen bordeaux menu. Opens with a gold, then bordeaux curtain layer; the main items enter
 * from a skew, staggered. Escape closes, focus is trapped inside, and page scroll is frozen.
 * Its links go through the page curtain like any other internal link.
 */
function SiteMenu({ open, onClose, pathname }: SiteMenuProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    lockScroll();
    closeRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== 'Tab' || !rootRef.current) return;
      // Focus trap: cycle within the menu.
      const focusables = [
        ...rootRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ];
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      unlockScroll();
    };
  }, [open, onClose]);

  return (
    <div
      ref={rootRef}
      id={MENU_ID}
      className={open ? `${styles.menu} ${styles.open}` : styles.menu}
      role="dialog"
      aria-modal="true"
      aria-label="Menú"
      inert={!open}
      data-lenis-prevent
    >
      <span className={styles.layerGold} aria-hidden="true" />
      <span className={styles.layerBordeaux} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.topActions}>
            <Button variant="outline" href={TIENDA_URL}>
              Tienda ↗
            </Button>
            <Button variant="outline" to="/reservas" onClick={onClose}>
              Reservar
            </Button>
          </div>
          <Link to="/" className={styles.logo} aria-label="Bodega Florio, inicio" onClick={onClose}>
            <img src={logoWhite} alt="" width={410} height={140} />
          </Link>
          <div className={styles.topRight}>
            <Button variant="white" href={whatsappUrl} className={styles.whatsapp}>
              Reservar por WhatsApp
            </Button>
            <IconButton ref={closeRef} label="Cerrar menú" variant="outline" onClick={onClose}>
              <Close />
            </IconButton>
          </div>
        </div>

        <nav aria-label="Menú principal">
          <ol className={styles.items}>
            {items.map(({ to, word, chip }, i) => {
              const [head, tail] = splitWord(word.toUpperCase());
              return (
                <li
                  key={to}
                  className={styles.item}
                  style={{ '--i': i, '--indent': i % 2 } as CSSProperties}
                >
                  <NavLink
                    to={to}
                    end
                    onClick={onClose}
                    className={({ isActive }) =>
                      isActive && pathname === to
                        ? `${styles.itemLink} ${styles.current}`
                        : styles.itemLink
                    }
                  >
                    <span className={styles.itemInner}>
                      <span className={styles.number}>{pad(i + 1)}</span>
                      <span className={styles.word} aria-label={word}>
                        <span aria-hidden="true">{head}</span>
                        <span
                          className={styles.chip}
                          style={{ backgroundImage: chip }}
                          aria-hidden="true"
                        />
                        <span aria-hidden="true">{tail}</span>
                      </span>
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </ol>

          <ul className={styles.secondary}>
            <li>
              <Link to="/" onClick={onClose}>
                <span className={styles.number}>05</span>Inicio
              </Link>
            </li>
            <li>
              <a href={TIENDA_URL} target="_blank" rel="noopener">
                <span className={styles.number}>06</span>Tienda online ↗
              </a>
            </li>
            <li>
              <Link to="/contacto?motivo=mayorista" onClick={onClose}>
                <span className={styles.number}>07</span>Mayoristas
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.mobileActions}>
          <Button variant="white" href={whatsappUrl}>
            Reservar por WhatsApp
          </Button>
          <Button variant="outline" to="/reservas" onClick={onClose}>
            Reservar
          </Button>
          <Button variant="outline" href={TIENDA_URL}>
            Tienda ↗
          </Button>
        </div>

        <div className={styles.bottom}>
          {turismo && (
            <a href={`tel:${turismo.whatsapp}`} className={styles.contact}>
              <span className={styles.circle} aria-hidden="true">
                <PhoneIcon />
              </span>
              {turismo.whatsapp}
            </a>
          )}
          <a href={`mailto:${emails.minorista}`} className={styles.contact}>
            <span className={styles.circle} aria-hidden="true">
              <MailIcon />
            </span>
            {emails.minorista}
          </a>
          {bodega && (
            <p className={styles.address}>
              {bodega.name} · {bodega.address}, {bodega.city}
            </p>
          )}
          <a
            href={INSTAGRAM_VINOTECA_URL}
            target="_blank"
            rel="noopener"
            className={styles.circle}
            aria-label="Instagram de Vinoteca Florio"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SiteMenu;
