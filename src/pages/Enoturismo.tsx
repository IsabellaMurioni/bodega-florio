import ExperienceSteps from '@/components/enoturismo/ExperienceSteps';
import HoursAndPrice from '@/components/enoturismo/HoursAndPrice';
import VisitorsGallery from '@/components/enoturismo/VisitorsGallery';
import CtaBand from '@/components/ui/CtaBand';
import IntroText from '@/components/ui/IntroText';
import PageHero from '@/components/ui/PageHero';
import { contactReasons } from '@/data/contact';
import { WINEOBS_URL } from '@/services/links';

const turismo = contactReasons.find((reason) => reason.id === 'turismo');

function Enoturismo() {
  return (
    <>
      <title>Enoturismo | Bodega Florio</title>
      <PageHero
        eyebrow="Maipú · Mendoza"
        title="Enoturismo"
        tone="vineyard"
        photoLabel="visitantes recorriendo el viñedo"
      />
      <IntroText>
        Una caminata entre los viñedos, el recorrido por el proceso productivo, una degustación
        guiada de nuestros estilos y la historia de la familia Florio — todo en una sola visita.
      </IntroText>
      <ExperienceSteps />
      <HoursAndPrice />
      <VisitorsGallery />
      <CtaBand
        id="reserva-visita-title"
        title="Reservá tu visita."
        whatsappMessage="Hola, quiero reservar una visita a Bodega Florio."
        extra={
          <>
            {turismo && (
              <p>
                {turismo.label}: <a href={`tel:${turismo.whatsapp}`}>{turismo.whatsapp}</a>
              </p>
            )}
            <p>
              También podés reservar online{' '}
              <a href={WINEOBS_URL} target="_blank" rel="noopener">
                vía WineObs
              </a>
              .
            </p>
          </>
        }
      />
    </>
  );
}

export default Enoturismo;
