export interface Commitment {
  title: string;
  text: string;
}

export interface Metric {
  value: number;
  suffix: string;
  label: string;
  /** Placeholder figure, to be confirmed. */
  isSample?: boolean;
}
