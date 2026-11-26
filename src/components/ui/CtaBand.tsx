import type { ReactNode } from 'react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import WhatsAppIcon from '@/components/ui/icons/WhatsAppIcon';
import { contactReasons } from '@/data/contact';
import type { ContactReason } from '@/types';
import { buildWhatsAppUrl } from '@/services/whatsapp';
import styles from './CtaBand.module.css';

interface CtaBandProps {
  /** Id for the heading (the section is labelled by it). */
  id: string;
  title: string;
  text?: ReactNode;
  /** Extra content under the text, e.g. contact lines or secondary links. */
  extra?: ReactNode;
  /** Prefilled WhatsApp message. */
  whatsappMessage: string;
  /** Which contact number the button writes to (default turismo). */
  reason?: ContactReason['id'];
  buttonLabel?: string;
}

/** Bordeaux call-to-action band with a WhatsApp button. */
function CtaBand({
  id,
  title,
  text,
  extra,
  whatsappMessage,
  reason = 'turismo',
  buttonLabel = 'Reservar por WhatsApp',
}: CtaBandProps) {
  const contact = contactReasons.find((item) => item.id === reason);
  const whatsappUrl = contact ? buildWhatsAppUrl(contact.whatsapp, whatsappMessage) : undefined;

  return (
    <section className={styles.band} aria-labelledby={id}>
      <Reveal className={`container ${styles.inner}`}>
        <div>
          <h2 id={id} className={styles.title}>
            {title}
          </h2>
          {text && <p className={styles.text}>{text}</p>}
          {extra && <div className={styles.extra}>{extra}</div>}
        </div>
        {whatsappUrl && (
          <Button href={whatsappUrl} tone="onDark">
            <WhatsAppIcon size={18} />
            {buttonLabel}
          </Button>
        )}
      </Reveal>
    </section>
  );
}

export default CtaBand;
