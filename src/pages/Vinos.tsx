import { useSearchParams } from 'react-router';
import IntroText from '@/components/ui/IntroText';
import PageHero from '@/components/ui/PageHero';
import CategoryTabs from '@/components/vinos/CategoryTabs';
import { PANEL_ID, tabId } from '@/components/vinos/tabIds';
import WineGrid from '@/components/vinos/WineGrid';
import { wineCategories } from '@/data/wineCategories';
import { getWinesByCategory } from '@/services/wines';
import type { WineCategory } from '@/types';
import styles from './Vinos.module.css';

const DEFAULT_CATEGORY: WineCategory = 'generosos';

const isCategory = (value: string | null): value is WineCategory =>
  wineCategories.some((category) => category.id === value);

function Vinos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const param = searchParams.get('linea');
  const active = isCategory(param) ? param : DEFAULT_CATEGORY;
  const activeLabel = wineCategories.find((category) => category.id === active)?.label;

  const changeCategory = (id: WineCategory) => {
    // replace: switching lines should not add history entries; keep the scroll position.
    setSearchParams({ linea: id }, { replace: true, preventScrollReset: true });
  };

  return (
    <>
      <title>Vinos | Bodega Florio</title>
      <PageHero
        eyebrow="22 etiquetas · 5 líneas"
        title="Nuestros Vinos"
        tone="bordeaux"
        photoLabel="botellas de la línea Florio"
      />
      <IntroText>
        De los generosos que nos dieron nombre a los varietales de guarda, cada vino de la familia
        Florio se elabora en pequeños lotes, pensado para acompañar una mesa o una sobremesa larga.
        Elegí una línea para conocerla en detalle.
      </IntroText>

      <CategoryTabs categories={wineCategories} active={active} onChange={changeCategory} />

      <section
        id={PANEL_ID}
        role="tabpanel"
        aria-labelledby={tabId(active)}
        className={`container ${styles.panel}`}
      >
        <h2 className="visually-hidden">{activeLabel}</h2>
        <WineGrid key={active} wines={getWinesByCategory(active)} category={active} />

        {import.meta.env.DEV && (
          <p className={styles.devNote}>
            {
              'Los botones "Comprar" llevan por ahora a la tienda online general — una vez que confirmemos el enlace exacto de cada etiqueta, los conectamos producto por producto.'
            }
          </p>
        )}
      </section>
    </>
  );
}

export default Vinos;
