import { StrictMode } from 'react';
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
      { path: '*', Component: NotFound },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
