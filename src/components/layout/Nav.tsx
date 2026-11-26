import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import logoWhite from '@/assets/brand/logo-white.png';
import CartIcon from '@/components/ui/icons/CartIcon';
import { TIENDA_URL } from '@/services/links';
import styles from './Nav.module.css';

const links = [
  { to: '/enoturismo', label: 'Enoturismo' },
  { to: '/vinos', label: 'Vinos' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/contacto', label: 'Contacto' },
];

const MENU_ID = 'menu-mobile';

// Compact the bar past COMPACT_AT; return to the top state below EXPAND_AT (hysteresis avoids flicker).
const COMPACT_AT = 72;
const EXPAND_AT = 48;

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

function Nav() {
  const { pathname } = useLocation();
  // The menu is tied to the path it was opened on, so any route change closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const burgerRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpenOn(null);

  // Scroll state lives on <html data-nav> so CSS (including --header-height) can follow it.
  useEffect(() => {
    const root = document.documentElement;
    let compact = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const next = compact ? y > EXPAND_AT : y > COMPACT_AT;
      if (next !== compact) {
        compact = next;
        if (compact) root.dataset.nav = 'compact';
        else delete root.dataset.nav;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frame);
      delete root.dataset.nav;
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenOn(null);
        burgerRef.current?.focus();
      }
    };
    // Close if the viewport grows past the mobile breakpoint (760px).
    const desktop = window.matchMedia('(min-width: 761px)');
    const onResize = () => desktop.matches && setOpenOn(null);

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <header className={`${styles.header} ${open ? styles.isOpen : ''}`}>
      <nav className={styles.bar} aria-label="Principal">
        <Link to="/" className={styles.logo} onClick={close}>
          <img src={logoWhite} alt="Bodega Florio" width={410} height={140} />
        </Link>

        <ul className={styles.links}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <a
            href={TIENDA_URL}
            target="_blank"
            rel="noopener"
            className={styles.cart}
            aria-label="Ir a la tienda online"
          >
            <CartIcon />
          </a>
          <button
            ref={burgerRef}
            type="button"
            className={styles.burger}
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpenOn(open ? null : pathname)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id={MENU_ID} className={styles.overlay}>
        <ul className={styles.overlayLinks}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass} onClick={close} tabIndex={open ? 0 : -1}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Nav;
