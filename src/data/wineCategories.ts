import type { WineCategoryInfo } from '@/types';

// Line descriptions are provisional (placeholder) until isa confirms them.
export const wineCategories: WineCategoryInfo[] = [
  {
    id: 'generosos',
    label: 'Generosos',
    description:
      'Los vinos que nos dieron nombre: licorosos, fortificados y criados con paciencia, de la tradición italiana y española.',
  },
  {
    id: 'espumante',
    label: 'Espumante',
    description: 'Burbujas frescas y dulces, para brindar o acompañar una sobremesa larga.',
  },
  {
    id: 'tintos',
    label: 'Tintos',
    description: 'Varietales y cortes de guarda de Mendoza, pensados para la mesa.',
  },
  {
    id: 'dulces',
    label: 'Dulces Naturales',
    description: 'Vinos dulces de uva, suaves y frutados, para disfrutar bien fríos.',
  },
  {
    id: 'industriales',
    label: 'Industriales',
    description:
      'Nuestros Oporto y Marsala en formato industrial para cocinas, pastelerías y heladerías.',
  },
];
