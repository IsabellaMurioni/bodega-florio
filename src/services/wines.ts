import { wines } from '@/data/wines';
import type { Wine, WineCategory } from '@/types';

export function getWinesByCategory(category: WineCategory): Wine[] {
  return wines.filter((wine) => wine.category === category);
}

/** Where a wine's "Comprar" button goes: its Tienda Nube link, or wholesale contact for Industriales. */
export function getBuyLink(wine: Wine): { to?: string; href?: string } {
  return wine.category === 'industriales'
    ? { to: '/contacto?motivo=mayorista' }
    : { href: wine.buyUrl };
}
