import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import RevealText from '@/components/ui/RevealText';
import { homeReviews } from '@/data/home';
import { reviews } from '@/data/reviews';
import styles from './HomeReviews.module.css';

/** Reviews: title and CTA on the left, two-column cards on the right. */
function HomeReviews() {
  if (reviews.length === 0) return null;
  const hasSamples = reviews.some((review) => review.isSample);

  return (
    <section className={styles.section} aria-labelledby="home-reviews-title">
      <div className={styles.aside}>
        <RevealText
          as="h2"
          id="home-reviews-title"
          className={styles.title}
          lines={homeReviews.titleLines}
        />
        <Reveal className={styles.asideBody}>
          <Button to={homeReviews.cta.to}>{homeReviews.cta.label}</Button>
          {hasSamples && <p className={styles.sample}>{homeReviews.sampleNote}</p>}
        </Reveal>
      </div>

      <ul className={styles.cards}>
        {reviews.map((review, i) => (
          <li key={i}>
            <Reveal delay={i * 100} className={styles.card}>
              <span
                className={styles.stars}
                role="img"
                aria-label={`${review.rating} de 5 estrellas`}
              >
                {'★'.repeat(review.rating)}
              </span>
              <blockquote className={styles.text}>
                <p>{review.text}</p>
              </blockquote>
              <p className={styles.author}>{review.author}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HomeReviews;
