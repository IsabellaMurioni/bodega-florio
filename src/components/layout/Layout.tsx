import { Outlet, ScrollRestoration } from 'react-router';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

function Layout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Layout;
