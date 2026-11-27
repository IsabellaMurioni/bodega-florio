import Button from '@/components/ui/Button';
import Eyebrow from '@/components/ui/Eyebrow';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import Reveal from '@/components/ui/Reveal';
import RevealText from '@/components/ui/RevealText';
import { homeGastronomy } from '@/data/home';
import styles from './GastronomyCollage.module.css';

/** Asymmetric collage on white: a big title cropped by the section top, three photos and a text block. */
function GastronomyCollage() {
  const { photos } = homeGastronomy;

  return (
    <section className={styles.section} aria-labelledby="home-gastro-title">
      <p className={styles.bigTitle} aria-hidden="true">
        {homeGastronomy.bigTitle}
      </p>

      <div className={styles.grid}>
        <Reveal className={styles.large}>
          <ImagePlaceholder label={photos.large} ratio="4 / 5" />
        </Reveal>

        <div className={styles.text}>
          <Eyebrow className={styles.eyebrow}>{homeGastronomy.eyebrow}</Eyebrow>
          <RevealText
            as="h2"
            id="home-gastro-title"
            className={styles.title}
            lines={homeGastronomy.titleLines}
          />
          <Reveal className={styles.body}>
            <p>{homeGastronomy.text}</p>
            <Button to={homeGastronomy.cta.to}>{homeGastronomy.cta.label}</Button>
          </Reveal>
        </div>

        <Reveal className={styles.small} delay={150}>
          <ImagePlaceholder label={photos.small} ratio="1 / 1" />
        </Reveal>

        <Reveal className={styles.medium} delay={250}>
          <ImagePlaceholder label={photos.medium} ratio="16 / 10" />
        </Reveal>
      </div>
    </section>
  );
}

export default GastronomyCollage;
