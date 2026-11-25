export interface ContactReason {
  id: 'turismo' | 'comedor' | 'minorista' | 'mayorista';
  label: string;
  /** International format, e.g. +5492617158633. */
  whatsapp: string;
  /** Whether the number has been confirmed by the winery. */
  verified: boolean;
}

export interface Location {
  name: string;
  address: string;
  city: string;
  hours?: string;
  mapsUrl?: string;
  instagram?: string;
}
