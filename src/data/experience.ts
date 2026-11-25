import type { ExperienceStep, VisitHours, VisitorTestimonial } from '@/types';

export const experienceSteps: ExperienceStep[] = [
  {
    n: '01',
    title: 'Caminata por el viñedo',
    text: 'Guiada, entre las hileras y con vista a la Cordillera.',
  },
  {
    n: '02',
    title: 'Recorrido por la bodega',
    text: 'El proceso productivo, de la cosecha a la botella.',
  },
  { n: '03', title: 'Degustación guiada', text: 'Un recorrido por nuestros distintos estilos.' },
  {
    n: '04',
    title: 'Historia y productos regionales',
    text: 'La historia de la familia Florio y una selección local.',
  },
];

export const visitHours: VisitHours = {
  days: 'Lunes a sábado, de 10 a 18 hs.',
  languages: 'Visitas guiadas en español e inglés.',
  pending: 'Confirmar domingos, duración y precio.',
};

// Sample testimonials (placeholder copy until real ones are collected).
export const visitorTestimonials: VisitorTestimonial[] = [
  {
    quote: 'Vinimos por el malbec, nos quedamos por la sobremesa.',
    who: 'Grupo de amigos, Buenos Aires',
    isSample: true,
  },
  {
    quote: 'La vista a la Cordillera desde el viñedo no se olvida.',
    who: 'Pareja, Córdoba',
    isSample: true,
  },
  { quote: 'El mejor asado que comimos en Mendoza.', who: 'Familia, Rosario', isSample: true },
  {
    quote: 'Nos explicaron todo el proceso con una pasión total.',
    who: 'Turistas, España',
    isSample: true,
  },
  {
    quote: 'Volvimos al año siguiente con más amigos.',
    who: 'Grupo, Buenos Aires',
    isSample: true,
  },
  { quote: 'La cata fue el punto más alto del viaje.', who: 'Pareja, Chile', isSample: true },
  {
    quote: 'Un lugar con historia de verdad, se siente.',
    who: 'Visitante, Brasil',
    isSample: true,
  },
  {
    quote: 'Ideal para una tarde larga entre viñedos.',
    who: 'Familia, Buenos Aires',
    isSample: true,
  },
];
