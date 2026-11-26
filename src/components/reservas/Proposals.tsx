import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import { contactReasons } from '@/data/contact';
import { proposals } from '@/data/proposals';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import styles from './Proposals.module.css';

const turismo = contactReasons.find((reason) => reason.id === 'turismo');

function Proposals() {
  return (
    <section className={styles.section} aria-labelledby="propuestas-title">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Elegí tu experiencia"
            title={<span id="propuestas-title">Nuestras propuestas</span>}
          />
        </Reveal>

        <ol className={styles.list}>
          {proposals.map(({ id, title, summary, includes, duration, price }, index) => (
            <li key={id}>
              <Reveal delay={index * 100} className={styles.item}>
                <span className={styles.number} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.summary}>{summary}</p>
                  {includes.length > 0 && (
                    <ul className={styles.includes}>
                      {includes.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className={styles.meta}>
                  {duration && <p className={styles.detail}>{duration}</p>}
                  <p className={price ? styles.detail : styles.pending}>
                    {price ?? 'Precio a confirmar'}
                  </p>
                  {turismo && (
                    <a
                      href={buildWhatsAppUrl(turismo.whatsapp, `Hola, quiero reservar: ${title}.`)}
                      target="_blank"
                      rel="noopener"
                      className={styles.link}
                    >
                      Reservar esta propuesta →
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Proposals;
