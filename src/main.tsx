import { StrictMode } from 'react';
import { preload } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import './index.css';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Enoturismo from '@/pages/Enoturismo';
import Vinos from '@/pages/Vinos';
import Reservas from '@/pages/Reservas';
import Contacto from '@/pages/Contacto';
import NotFound from '@/pages/NotFound';
import krylonUrl from '@/assets/fonts/krylon/Krylon-Regular.woff2?url';
import neutralSansUrl from '@/assets/fonts/neutral-sans/NeutralSansVF.woff2?url';

// Preload both brand fonts (same hashed URLs the @font-face rules resolve to).
for (const href of [krylonUrl, neutralSansUrl]) {
  preload(href, { as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' });
}

// Dev-only style guide at /estilos; the branch is removed from production builds.
const devRoutes = import.meta.env.DEV
  ? [
      {
        path: 'estilos',
        handle: { noHero: true },
        HydrateFallback: () => null,
        lazy: async () => ({ Component: (await import('@/pages/dev/Estilos')).default }),
      },
    ]
  : [];

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'enoturismo', Component: Enoturismo },
      { path: 'vinos', Component: Vinos },
      { path: 'reservas', Component: Reservas },
      { path: 'contacto', Component: Contacto },
      ...devRoutes,
      { path: '*', Component: NotFound, handle: { noHero: true } },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
