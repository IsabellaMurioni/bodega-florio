export interface ExperienceStep {
  n: string;
  title: string;
  text: string;
}

export interface VisitorTestimonial {
  quote: string;
  who: string;
  /** Placeholder copy, to be replaced with real testimonials. */
  isSample: boolean;
}

export interface VisitHours {
  days: string;
  languages: string;
  pending?: string;
}
