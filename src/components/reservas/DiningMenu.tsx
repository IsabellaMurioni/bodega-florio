import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { menuSections } from '@/data/proposals';
import styles from './DiningMenu.module.css';

function DiningMenu() {
  return (
    <section className={styles.section} aria-labelledby="menu-title">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="El comedor" title={<span id="menu-title">Nuestro menú</span>} />
        </Reveal>

        <div className={styles.columns}>
          {menuSections.map(({ category, dishes, note }, index) => (
            <Reveal key={category} delay={index * 100} className={styles.column}>
              <h3 className={styles.category}>{category}</h3>
              {dishes.length > 0 ? (
                <ul className={styles.dishes}>
                  {dishes.map((dish) => (
                    <li key={dish}>{dish}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.pending}>Platos a confirmar</p>
              )}
              {note && <p className={styles.note}>{note}</p>}
            </Reveal>
          ))}
        </div>

        {import.meta.env.DEV && (
          <p className={styles.devNote}>[Menú completo y precios a confirmar con Isa]</p>
        )}
      </div>
    </section>
  );
}

export default DiningMenu;
