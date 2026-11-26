export interface Review {
  author: string;
  rating: number;
  text: string;
  date?: string;
  photo?: string;
  /** Placeholder review, to be replaced with a real one. */
  isSample?: boolean;
}
