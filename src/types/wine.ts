export type WineCategory = 'generosos' | 'espumante' | 'tintos' | 'dulces' | 'industriales';

export interface Wine {
  id: string;
  name: string;
  category: WineCategory;
  description: string;
  image?: string;
  cta: 'comprar' | 'consultar';
  buyUrl: string;
  /** Content still to be confirmed by the winery. */
  pending?: string;
}

export interface WineCategoryInfo {
  id: WineCategory;
  label: string;
}
