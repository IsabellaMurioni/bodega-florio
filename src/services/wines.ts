import { wines } from '@/data/wines';
import type { Wine, WineCategory } from '@/types';

export function getWinesByCategory(category: WineCategory): Wine[] {
  return wines.filter((wine) => wine.category === category);
}
