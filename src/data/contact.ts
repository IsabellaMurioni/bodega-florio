import { BODEGA_MAPS_URL } from '@/services/links';
import type { ContactReason, Location } from '@/types';

// TODO: numbers and emails not yet verified with the winery.
export const contactReasons: ContactReason[] = [
  { id: 'turismo', label: 'Turismo y visitas', whatsapp: '+5492617158633', verified: false },
  { id: 'comedor', label: 'Comedor', whatsapp: '+542616614184', verified: false },
  { id: 'minorista', label: 'Venta minorista', whatsapp: '+542615610429', verified: false },
  { id: 'mayorista', label: 'Venta mayorista', whatsapp: '+541179000020', verified: false },
];

export const emails = {
  minorista: 'ventasbodegaflorio@gmail.com',
  mayorista: 'ventas@bodegaflorio.com.ar',
};

export const locations: Location[] = [
  {
    // TODO: exact address and Google Maps link pending.
    name: 'Bodega Florio',
    address: 'Cruz de Piedra, Maipú',
    city: 'Mendoza',
    hours: 'Lunes a sábado, 10 a 18 hs.',
    mapsUrl: BODEGA_MAPS_URL,
  },
  {
    name: 'Vinoteca Florio',
    address: 'Av. Don Pedro de Mendoza 1713, La Boca',
    city: 'CABA',
    hours: 'Todos los días, 11 a 17 hs.',
    instagram: '@vinotecaflorio',
  },
];
