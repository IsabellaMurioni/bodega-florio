import { useCallback, useEffect, useState } from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Loader from '@/components/layout/Loader';
import PageCurtain from '@/components/layout/PageCurtain';
import { IntroContext } from '@/hooks/useIntro';
import { useNoHero, usePageTheme } from '@/hooks/useNoHero';
import { startSmoothScroll, stopSmoothScroll } from '@/services/smoothScroll';
import styles from './Layout.module.css';

function Layout() {
  const noHero = useNoHero();
  const theme = usePageTheme();
  // Layout mounts once per full page load, so the loader only ever shows on the first page.
  const [introDone, setIntroDone] = useState(false);

  const finishIntro = useCallback(() => {
    if (document.documentElement.dataset.intro === 'done') return;
    setIntroDone(true);
    document.documentElement.dataset.intro = 'done';
    window.dispatchEvent(new Event('florio:intro-done'));
  }, []);

  useEffect(() => {
    startSmoothScroll();
    return stopSmoothScroll;
  }, []);

  return (
    <IntroContext.Provider value={introDone}>
      <a href="#contenido" className={styles.skip}>
        Saltar al contenido
      </a>
      <Nav />
      <main
        id="contenido"
        tabIndex={-1}
        data-theme={theme}
        className={noHero ? `${styles.main} ${styles.noHero}` : styles.main}
      >
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
      <PageCurtain />
      {!introDone && <Loader onDone={finishIntro} />}
    </IntroContext.Provider>
  );
}

export default Layout;
