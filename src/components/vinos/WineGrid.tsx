import Button from '@/components/ui/Button';
import ImagePlaceholder, { type PlaceholderTone } from '@/components/ui/ImagePlaceholder';
import type { Wine, WineCategory } from '@/types';
import styles from './WineGrid.module.css';

const toneByCategory: Record<WineCategory, PlaceholderTone> = {
  generosos: 'gold',
  espumante: 'sparkling',
  tintos: 'red',
  dulces: 'blush',
  industriales: 'stone',
};

interface WineGridProps {
  wines: Wine[];
  category: WineCategory;
}

/** Wines of one line. Re-key it on category change so the entrance animation replays. */
function WineGrid({ wines, category }: WineGridProps) {
  return (
    <ul className={styles.grid}>
      {wines.map((wine, index) => (
        <li key={wine.id} className={styles.item} style={{ animationDelay: `${index * 70}ms` }}>
          <div className={styles.photo}>
            <ImagePlaceholder
              label={`botella de ${wine.name}`}
              tone={toneByCategory[category]}
              ratio="3 / 4"
              src={wine.image}
            />
          </div>
          <h3 className={styles.name}>{wine.name}</h3>
          <p className={styles.description}>{wine.description}</p>
          <div className={styles.action}>
            {wine.cta === 'consultar' ? (
              <Button to={wine.buyUrl}>Consultar por mayor</Button>
            ) : (
              <Button href={wine.buyUrl}>Comprar</Button>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default WineGrid;
