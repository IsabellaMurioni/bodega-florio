export interface Proposal {
  id: string;
  title: string;
  summary: string;
  includes: string[];
  duration?: string;
  price?: string;
}

export interface MenuSection {
  category: string;
  dishes: string[];
  note?: string;
}
