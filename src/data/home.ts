import type { Commitment, Metric } from '@/types';

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
