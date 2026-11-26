import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import WhatsAppIcon from '@/components/ui/icons/WhatsAppIcon';
import { contactReasons } from '@/data/contact';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import styles from './ReservationCta.module.css';

const turismo = contactReasons.find((reason) => reason.id === 'turismo');
const whatsappUrl = turismo
  ? buildWhatsAppUrl(turismo.whatsapp, 'Hola, quiero reservar una visita a Bodega Florio.')
  : undefined;

function ReservationCta() {
  return (
    <section className={styles.band} aria-labelledby="reserva-title">
      <Reveal className={`container ${styles.inner}`}>
        <div>
          <h2 id="reserva-title" className={styles.title}>
            Vení a conocer Florio.
          </h2>
          <p className={styles.text}>
            Recorridos, degustaciones y una mesa con vista a los viñedos te esperan.
          </p>
        </div>
        {whatsappUrl && (
          <Button href={whatsappUrl} tone="onDark">
            <WhatsAppIcon size={18} />
            Reservar por WhatsApp
          </Button>
        )}
      </Reveal>
    </section>
  );
}

export default ReservationCta;
