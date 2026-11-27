import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import logoBordeaux from '@/assets/brand/logo-bordeaux.png';
import logoWhite from '@/assets/brand/logo-white.png';
import CartIcon from '@/components/ui/icons/CartIcon';
import { useIntro } from '@/hooks/useIntro';
import { useNoHero } from '@/hooks/useNoHero';
import { TIENDA_URL } from '@/services/links';
import SiteMenu, { MENU_ID } from './SiteMenu';
import styles from './Nav.module.css';

const reserveLinks = [
  { to: '/reservas', label: 'Restaurante' },
  { to: '/enoturismo', label: 'Visitas y degustaciones' },
];

const rightLinks = [
  { to: '/enoturismo', label: 'Enoturismo' },
  { to: '/vinos', label: 'Vinos' },
];

// Compact past COMPACT_AT; back to the top state below EXPAND_AT (hysteresis avoids flicker).
const COMPACT_AT = 72;
const EXPAND_AT = 48;

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link;

function ArrowUpRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Caret() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 8h14l-7 9z" />
    </svg>
  );
}

/**
 * Fixed header, never hidden. Top state (over the hero): transparent, white. Scrolled, or on
 * routes without a hero: white bar with a thin rule, bordeaux. The state lives on
 * html[data-nav] so CSS, including --header-height, can follow it.
 */
function Nav() {
  const { pathname } = useLocation();
  const noHero = useNoHero();
  const introDone = useIntro();
  // Menu and dropdown are tied to the path they were opened on, so any route change closes them.
  const [menuOn, setMenuOn] = useState<string | null>(null);
  const [dropdownOn, setDropdownOn] = useState<string | null>(null);
  const menuOpen = menuOn === pathname;
  const dropdownOpen = dropdownOn === pathname;
  const burgerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = document.documentElement;
    let compact = false;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const next = noHero || (compact ? y > EXPAND_AT : y > COMPACT_AT);
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
  }, [noHero]);

  // Close the "Reservar" dropdown on outside click or Escape.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointer = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) setDropdownOn(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDropdownOn(null);
    };
    document.addEventListener('pointerdown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [dropdownOpen]);

  const closeMenu = () => {
    setMenuOn(null);
    burgerRef.current?.focus({ preventScroll: true });
  };

  return (
    <header className={[styles.header, introDone && styles.ready].filter(Boolean).join(' ')}>
      <nav className={styles.bar} aria-label="Principal">
        <div className={styles.left}>
          <a
            href={TIENDA_URL}
            target="_blank"
            rel="noopener"
            className={`${styles.link} ${styles.reveal} ${styles.desktopOnly}`}
            style={{ '--i': 0 } as CSSProperties}
          >
            Tienda <ArrowUpRight />
          </a>
          <div
            ref={dropdownRef}
            className={`${styles.dropdown} ${styles.reveal} ${styles.desktopOnly}`}
            style={{ '--i': 1 } as CSSProperties}
          >
            <button
              type="button"
              className={styles.link}
              aria-expanded={dropdownOpen}
              aria-controls="reservar-menu"
              onClick={() => setDropdownOn(dropdownOpen ? null : pathname)}
            >
              Reservar <Caret />
            </button>
            <ul id="reservar-menu" className={styles.dropdownList} hidden={!dropdownOpen}>
              {reserveLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} onClick={() => setDropdownOn(null)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <a
            href={TIENDA_URL}
            target="_blank"
            rel="noopener"
            className={`${styles.cart} ${styles.mobileOnly}`}
            aria-label="Ir a la tienda online"
          >
            <CartIcon size={24} />
          </a>
        </div>

        <Link to="/" className={styles.logo} aria-label="Bodega Florio, inicio">
          <img src={logoWhite} alt="" width={410} height={140} className={styles.logoWhite} />
          <img src={logoBordeaux} alt="" width={410} height={140} className={styles.logoBordeaux} />
        </Link>

        <div className={styles.right}>
          {rightLinks.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              className={(state) => `${linkClass(state)} ${styles.reveal} ${styles.desktopOnly}`}
              style={{ '--i': i + 2 } as CSSProperties}
            >
              {label}
            </NavLink>
          ))}
          <button
            ref={burgerRef}
            type="button"
            className={`${styles.burger} ${styles.reveal}`}
            style={{ '--i': 4 } as CSSProperties}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-label="Abrir menú"
            onClick={() => setMenuOn(pathname)}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <SiteMenu open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </header>
  );
}

export default Nav;
