import type { Commitment, Metric } from '@/types';

// R4 home copy. Texts marked "placeholder" are provisional until isa confirms them.

export const homeHero = {
  /** Three display words; the first two rise faster than the photo, the third stays lower. */
  words: ['Tradición', 'italiana', 'en Maipú'] as [string, string, string], // placeholder
  text: 'La tierra que hizo el vino, y el vino que hizo la casa. Desde 1912 en Cruz de Piedra, Maipú.',
  photoLabel: 'Viñedos de la bodega con la Cordillera',
  band: {
    title: 'Más de cien años de oficio',
    cta: { label: 'Nuestra historia', to: '/enoturismo#historia' },
  },
};

export const homeEnoturismo = {
  titleLines: ['Una bodega', 'para descubrir', 'entre viñedos'],
  text: 'Recorré la bodega, caminá entre las hileras y terminá con una degustación guiada de nuestros estilos, de los generosos a los espumantes.',
  cta: { label: 'Descubrí el enoturismo', to: '/enoturismo' },
  slides: [
    'El viñedo',
    'La cava de barricas',
    'Degustación guiada',
    'Nuestra gente',
    'El comedor',
    'La fachada histórica',
  ],
};

export const homeWineLines = {
  titleLines: ['Nuestros', 'vinos'],
  eyebrow: 'Línea',
  cta: 'Descubrir',
};

export const homePassion = {
  titleLines: ['Pasión', 'por el', 'vino'], // placeholder
  eyebrow: 'Hecho a mano desde 1912',
  text: 'De los generosos que nos dieron nombre a los varietales de guarda, cada vino de la familia Florio se elabora en pequeños lotes, pensado para acompañar una mesa o una sobremesa larga.',
  bottles: ['Mistela', 'Marsala', 'Malbec'],
};

export const homeGastronomy = {
  bigTitle: 'Gastronomía',
  eyebrow: 'Restaurante',
  titleLines: ['Una mesa', 'entre los viñedos'],
  text: 'Cocina de estación, productos de la zona y nuestros vinos en la mesa. Reservá tu lugar para almorzar en la bodega.', // placeholder
  cta: { label: 'Reservar mesa', to: '/reservas' },
  photos: {
    large: 'Mesa puesta en el comedor',
    small: 'Plato de estación',
    medium: 'Copas en la galería',
  },
};

export const homeReviews = {
  titleLines: ['Lo que', 'dicen'],
  cta: { label: 'Reservar visita', to: '/enoturismo' },
  sampleNote: 'Reseñas de ejemplo',
};

// Pre-redesign data, kept for reuse in later steps.

export const commitments: Commitment[] = [
  {
    title: 'Con la tierra',
    text: 'Cuidamos el medioambiente, a nuestra gente y a la comunidad que nos rodea.',
  },
  {
    title: 'Con la mejora constante',
    text: 'Buscamos innovar cosecha tras cosecha, sin perder lo que nos define.',
  },
  { title: 'Con el equipo', text: 'Trabajamos juntos para sostener la calidad de siempre.' },
  { title: 'Con la verdad', text: 'Comunicamos de forma clara y honesta, sin atajos.' },
];

export const metrics: Metric[] = [
  { value: 1912, suffix: '', label: 'Año de fundación' },
  { value: 50000, suffix: '+', label: 'Visitantes recibidos', isSample: true },
  { value: 22, suffix: '', label: 'Etiquetas propias' },
];
