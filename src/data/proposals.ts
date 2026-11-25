import type { MenuSection, Proposal } from '@/types';

// TODO: includes, duration and price are pending confirmation from the winery.
export const proposals: Proposal[] = [
  {
    id: 'tour-almuerzo',
    title: 'Tour + Almuerzo',
    summary: 'Recorrido por la bodega seguido de un almuerzo en el comedor.',
    includes: [],
  },
  {
    id: 'cata',
    title: 'Cata guiada',
    summary: 'Degustación de nuestros vinos de la mano de un anfitrión.',
    includes: [],
  },
  {
    id: 'evento-privado',
    title: 'Evento privado',
    summary: 'El espacio completo para tu celebración o reunión de trabajo.',
    includes: [],
  },
];

// TODO: dishes pending (menu not yet provided).
export const menuSections: MenuSection[] = [
  { category: 'Entradas', dishes: [] },
  { category: 'Principales', dishes: [] },
  { category: 'Postres', dishes: [], note: 'Maridaje con Marsala Florio' },
];
