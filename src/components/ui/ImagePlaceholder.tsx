import styles from './ImagePlaceholder.module.css';

export type PlaceholderTone =
  'neutral' | 'vineyard' | 'bordeaux' | 'gold' | 'stone' | 'sparkling' | 'red' | 'blush' | 'ochre';

interface ImagePlaceholderProps {
  /** What the photo will show; used as the accessible name and the visible label. */
  label: string;
  /** CSS aspect-ratio, e.g. "4 / 5" (default "4 / 3"). */
  ratio?: string;
  tone?: PlaceholderTone;
  /** Word shown in the visible label, e.g. [Foto: ...] or [Mapa: ...] (default "Foto"). */
  kind?: string;
  /** When set, the real image is rendered instead of the placeholder. */
  src?: string;
  alt?: string;
  className?: string;
}

/**
 * Stand-in for photos that are not delivered yet (R0: neutral grey by default; the old colored
 * tones remain for pre-redesign pages). Swaps to a real <img> via `src`.
 */
function ImagePlaceholder({
  label,
  ratio = '4 / 3',
  tone = 'neutral',
  kind = 'Foto',
  src,
  alt,
  className,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt ?? label}
        loading="lazy"
        decoding="async"
        className={[styles.image, className].filter(Boolean).join(' ')}
        style={{ aspectRatio: ratio }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={label}
      className={[styles.placeholder, styles[tone], className].filter(Boolean).join(' ')}
      style={{ aspectRatio: ratio }}
    >
      <span className={styles.label} aria-hidden="true">
        [{kind}: {label}]
      </span>
    </div>
  );
}

export default ImagePlaceholder;
