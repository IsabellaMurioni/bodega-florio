import Reveal from '@/components/ui/Reveal';
import { reviews } from '@/data/reviews';
import type { Review } from '@/types';
import styles from './ReviewsSection.module.css';

function Stars({ rating }: { rating: number }) {
  return (
    <span className={styles.stars} role="img" aria-label={`${rating} de 5 estrellas`}>
      {'★'.repeat(rating)}
    </span>
  );
}

function Quote({ review, featured = false }: { review: Review; featured?: boolean }) {
  return (
    <figure className={featured ? styles.featured : styles.quote}>
      <Stars rating={review.rating} />
      <blockquote>
        <p>{review.text}</p>
      </blockquote>
      <figcaption className={styles.author}>— {review.author}</figcaption>
    </figure>
  );
}

function ReviewsSection() {
  if (reviews.length === 0) return null;
  const [featured, ...rest] = reviews;
  const hasSamples = reviews.some((review) => review.isSample);

  return (
    <section className={styles.section} aria-labelledby="resenas-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.heading}>
          <h2 id="resenas-title">Lo que dicen de nosotros</h2>
          {hasSamples && <p className={styles.sampleNote}>Reseñas de ejemplo</p>}
        </Reveal>

        {featured && (
          <Reveal className={styles.featuredWrap} delay={100}>
            <Quote review={featured} featured />
          </Reveal>
        )}

        <div className={styles.others}>
          {rest.slice(0, 2).map((review, index) => (
            <Reveal key={index} delay={200 + index * 100}>
              <Quote review={review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
