import { Link, NavLink } from 'react-router';

const links = [
  { to: '/enoturismo', label: 'Enoturismo' },
  { to: '/vinos', label: 'Vinos' },
  { to: '/reservas', label: 'Reservas' },
  { to: '/contacto', label: 'Contacto' },
];

function Nav() {
  return (
    <header>
      <nav>
        <Link to="/">FLORIO</Link>
        <ul>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to}>{label}</NavLink>
            </li>
          ))}
        </ul>
        <a
          href="https://bodegaflorio.mitiendanube.com/"
          target="_blank"
          rel="noopener"
          aria-label="Ir a la tienda online"
        >
          Tienda
        </a>
      </nav>
    </header>
  );
}

export default Nav;
