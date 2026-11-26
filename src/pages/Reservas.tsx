import DiningMenu from '@/components/reservas/DiningMenu';
import Proposals from '@/components/reservas/Proposals';
import CtaBand from '@/components/ui/CtaBand';
import PageHero from '@/components/ui/PageHero';

function Reservas() {
  return (
    <>
      <title>Reservas | Bodega Florio</title>
      <PageHero
        eyebrow="Reservas y Comedor"
        title="Una mesa entre los viñedos"
        tone="ochre"
        photoLabel="mesa puesta en el comedor"
      />
      <Proposals />
      <DiningMenu />
      <CtaBand
        id="reservas-cta-title"
        title="¿Ya elegiste tu propuesta?"
        text="Te confirmamos la reserva directo por WhatsApp."
        whatsappMessage="Hola, quiero hacer una reserva en Bodega Florio."
      />
    </>
  );
}

export default Reservas;
