import { useRef, useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';
import Reveal from '@/components/ui/Reveal';
import SectionHeading from '@/components/ui/SectionHeading';
import WhatsAppIcon from '@/components/ui/icons/WhatsAppIcon';
import { contactReasons } from '@/data/contact';
import type { ContactReason } from '@/types';
import { buildContactMessage, buildWhatsAppUrl } from '@/services/whatsapp';
import ReasonIcon from './ReasonIcon';
import styles from './WhatsAppForm.module.css';

type ReasonId = ContactReason['id'];

// Short labels used in the form (copy from the design canvas).
const formLabels: Record<ReasonId, string> = {
  turismo: 'Turismo',
  comedor: 'Comedor',
  minorista: 'Venta minorista',
  mayorista: 'Venta mayorista',
};

type Errors = { name?: string; message?: string };

function WhatsAppForm({ initialReason }: { initialReason: ReasonId }) {
  const [reason, setReason] = useState<ReasonId>(initialReason);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const nameRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = 'Contanos tu nombre.';
    if (!message.trim()) next.message = 'Escribí tu mensaje.';
    setErrors(next);

    if (next.name) return nameRef.current?.focus();
    if (next.message) return messageRef.current?.focus();

    const target = contactReasons.find((item) => item.id === reason);
    if (!target) return;
    const text = buildContactMessage(
      formLabels[reason],
      name.trim(),
      contact.trim(),
      message.trim(),
    );
    window.open(buildWhatsAppUrl(target.whatsapp, text), '_blank', 'noopener');
  };

  return (
    <section className={styles.section} aria-labelledby="whatsapp-title">
      <div className={`container ${styles.grid}`}>
        <Reveal className={styles.formCol}>
          <SectionHeading
            eyebrow="Escribinos"
            title={<span id="whatsapp-title">Contacto directo por WhatsApp</span>}
          />

          <form className={styles.form} onSubmit={onSubmit} noValidate>
            <fieldset className={styles.reasons}>
              <legend className={styles.label}>¿Por qué nos escribís?</legend>
              <div className={styles.options}>
                {contactReasons.map(({ id }) => {
                  return (
                    <label key={id} className={styles.option}>
                      <input
                        type="radio"
                        name="motivo"
                        value={id}
                        checked={reason === id}
                        onChange={() => setReason(id)}
                        className={styles.radio}
                      />
                      <ReasonIcon reason={id} size={18} />
                      <span>{formLabels[id]}</span>
                    </label>
                  );
                })}
              </div>
              <p className={styles.current} aria-live="polite">
                Nos escribís por: <strong>{formLabels[reason]}</strong>
              </p>
            </fieldset>

            <div className={styles.field}>
              <label htmlFor="contacto-nombre" className={styles.label}>
                Tu nombre
              </label>
              <input
                ref={nameRef}
                id="contacto-nombre"
                type="text"
                autoComplete="name"
                placeholder="Nombre y apellido"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (errors.name) setErrors({ ...errors, name: undefined });
                }}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? 'contacto-nombre-error' : undefined}
                className={styles.input}
              />
              {errors.name && (
                <p id="contacto-nombre-error" className={styles.error}>
                  {errors.name}
                </p>
              )}
            </div>

            <div className={styles.field}>
              <label htmlFor="contacto-medio" className={styles.label}>
                Teléfono o email
              </label>
              <input
                id="contacto-medio"
                type="text"
                autoComplete="email"
                placeholder="Para responderte si WhatsApp no está disponible"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="contacto-mensaje" className={styles.label}>
                Tu mensaje
              </label>
              <textarea
                ref={messageRef}
                id="contacto-mensaje"
                rows={5}
                placeholder="Contanos un poco más"
                value={message}
                onChange={(event) => {
                  setMessage(event.target.value);
                  if (errors.message) setErrors({ ...errors, message: undefined });
                }}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? 'contacto-mensaje-error' : undefined}
                className={`${styles.input} ${styles.textarea}`}
              />
              {errors.message && (
                <p id="contacto-mensaje-error" className={styles.error}>
                  {errors.message}
                </p>
              )}
            </div>

            <div>
              <Button type="submit">
                <WhatsAppIcon size={18} />
                Enviar por WhatsApp
              </Button>
            </div>
          </form>
        </Reveal>

        <Reveal className={styles.aside} delay={150}>
          <p className={styles.quote}>Te respondemos directo por WhatsApp, a la brevedad.</p>
          <p className={styles.asideText}>
            Si preferís, también podés llamarnos o escribirnos por los canales de siempre — los vas
            a encontrar más abajo.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default WhatsAppForm;
