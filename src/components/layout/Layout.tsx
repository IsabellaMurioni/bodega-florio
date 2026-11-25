import { Outlet, ScrollRestoration } from 'react-router';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import styles from './Layout.module.css';

function Layout() {
  return (
    <>
      <a href="#contenido" className={styles.skip}>
        Saltar al contenido
      </a>
      <Nav />
      <main id="contenido" tabIndex={-1} className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Layout;
