import BottlePlaceholder from '@/components/ui/BottlePlaceholder';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import RevealText from '@/components/ui/RevealText';
import { TIENDA_URL } from '@/services/links';
import { getBuyLink } from '@/services/wines';
import type { Wine, WineCategoryInfo } from '@/types';
import styles from './WineLineGrid.module.css';

interface WineLineGridProps {
  line: WineCategoryInfo;
  wines: Wine[];
}

/** One line in the grid view: sticky left column (name, description, button) + 2-column cards. */
function WineLineGrid({ line, wines }: WineLineGridProps) {
  const wholesale = line.id === 'industriales';

  return (
    <section className={styles.line} aria-labelledby={`linea-${line.id}`}>
      <div className={styles.aside}>
        <div className={styles.sticky}>
          <RevealText
            as="h2"
            id={`linea-${line.id}`}
            className={styles.title}
            lines={[line.label]}
          />
          <Reveal className={styles.asideBody}>
            <p>{line.description}</p>
            {wholesale ? (
              <Button variant="outline" to="/contacto?motivo=mayorista">
                Consultar mayoristas
              </Button>
            ) : (
              <Button variant="outline" href={TIENDA_URL}>
                Ver en la tienda ↗
              </Button>
            )}
          </Reveal>
        </div>
      </div>

      <ul className={styles.cards}>
        {wines.map((wine) => {
          const buy = getBuyLink(wine);
          return (
            <li key={wine.id} className={styles.card}>
              <Reveal className={styles.cardInner}>
                <BottlePlaceholder label={wine.name} height={260} className={styles.bottle} />
                <h3 className={styles.name}>{wine.name}</h3>
                <p className={styles.label}>{line.label}</p>
                {buy.to ? (
                  <Button to={buy.to}>Consultar</Button>
                ) : (
                  <Button href={buy.href ?? ''}>Comprar</Button>
                )}
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default WineLineGrid;
