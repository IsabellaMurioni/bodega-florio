/** Builds a wa.me link. The phone may include +, spaces or dashes; only digits are kept. */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Builds the prefilled message sent from the contact form. */
export function buildContactMessage(
  reasonLabel: string,
  name: string,
  contact: string,
  message: string,
): string {
  const text = `Hola, soy ${name}. Les escribo por: ${reasonLabel}.\n\n${message}`;
  // The contact line is optional in the form; skip it when empty.
  return contact.trim() ? `${text}\n\nContacto: ${contact}` : text;
}
