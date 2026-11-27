import { useSearchParams } from 'react-router';
import WineControls, { type WineView } from '@/components/vinos/WineControls';
import WineLineGrid from '@/components/vinos/WineLineGrid';
import WineSlider from '@/components/vinos/WineSlider';
import { wineCategories } from '@/data/wineCategories';
import { wines } from '@/data/wines';
import { getWinesByCategory } from '@/services/wines';
import type { WineCategory } from '@/types';
import styles from './Vinos.module.css';

const isCategory = (value: string | null): value is WineCategory =>
  wineCategories.some((category) => category.id === value);

/**
 * Wines listing. State lives in the URL: ?linea=<line> (absent = all lines) and
 * ?vista=grilla (absent = slider), so footer, home and menu links keep working.
 */
function Vinos() {
  const [searchParams, setSearchParams] = useSearchParams();
  const linea = searchParams.get('linea');
  const line = isCategory(linea) ? linea : null;
  const view: WineView = searchParams.get('vista') === 'grilla' ? 'grilla' : 'slider';

  const update = (next: { line?: WineCategory | null; view?: WineView }) => {
    const params = new URLSearchParams(searchParams);
    const nextLine = next.line === undefined ? line : next.line;
    const nextView = next.view ?? view;
    if (nextLine) params.set('linea', nextLine);
    else params.delete('linea');
    if (nextView === 'grilla') params.set('vista', 'grilla');
    else params.delete('vista');
    // replace: filters and views should not add history entries; keep the scroll position.
    setSearchParams(params, { replace: true, preventScrollReset: true });
  };

  const sliderWines = line ? getWinesByCategory(line) : wines;
  const gridLines = line
    ? wineCategories.filter((category) => category.id === line)
    : wineCategories;
  const lineLabel = wineCategories.find((category) => category.id === line)?.label;

  return (
    <>
      <title>Vinos | Bodega Florio</title>
      <h1 className="visually-hidden">Nuestros vinos{lineLabel ? `: ${lineLabel}` : ''}</h1>

      <div className={styles.top}>
        {view === 'slider' && (
          <p className={styles.ghost} aria-hidden="true">
            Nuestros vinos
          </p>
        )}
        <WineControls
          line={line}
          view={view}
          onLineChange={(value) => update({ line: value })}
          onViewChange={(value) => update({ view: value })}
        />

        {view === 'slider' && (
          <div className={styles.sliderWrap}>
            <WineSlider key={line ?? 'todas'} wines={sliderWines} />
          </div>
        )}
      </div>

      {view === 'grilla' && (
        <div className={styles.grid}>
          {gridLines.map((category) => (
            <WineLineGrid
              key={category.id}
              line={category}
              wines={getWinesByCategory(category.id)}
            />
          ))}
        </div>
      )}

      {import.meta.env.DEV && (
        <p className={styles.devNote}>
          {
            'Los botones "Comprar" llevan por ahora a la tienda online general; cuando confirmemos el enlace de cada etiqueta, los conectamos producto por producto.'
          }
        </p>
      )}
    </>
  );
}

export default Vinos;
