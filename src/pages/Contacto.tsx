import { useSearchParams } from 'react-router';
import Channels from '@/components/contacto/Channels';
import Locations from '@/components/contacto/Locations';
import WhatsAppForm from '@/components/contacto/WhatsAppForm';
import PageHero from '@/components/ui/PageHero';
import { contactReasons } from '@/data/contact';
import type { ContactReason } from '@/types';

type ReasonId = ContactReason['id'];

const isReason = (value: string | null): value is ReasonId =>
  contactReasons.some((reason) => reason.id === value);

function Contacto() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get('motivo');
  const initialReason: ReasonId = isReason(param) ? param : 'turismo';

  return (
    <>
      <title>Contacto | Bodega Florio</title>
      <PageHero
        eyebrow="Visitanos o escribinos"
        title="Contacto"
        tone="stone"
        photoLabel="entrada de la bodega"
      />
      <Locations />
      {/* Re-mount when ?motivo= changes so the preselected reason follows the URL. */}
      <WhatsAppForm key={initialReason} initialReason={initialReason} />
      <Channels />
    </>
  );
}

export default Contacto;
