import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
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

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

function Nav() {
  const { pathname } = useLocation();
  // The menu is tied to the path it was opened on, so any route change closes it.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const burgerRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpenOn(null);

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
        <Link to="/" className={styles.wordmark} onClick={close}>
          FLORIO
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
