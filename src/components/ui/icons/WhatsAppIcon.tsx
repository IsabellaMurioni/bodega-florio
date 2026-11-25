import Icon, { type IconProps } from './Icon';

/** Simplified line version of the WhatsApp glyph (speech bubble + handset). */
function WhatsAppIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3.5 20.5 4.9 16.4A8.5 8.5 0 1 1 8 19.2z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8a4.5 4.5 0 0 1-2.2-2.2l.8-1-1-2z" />
    </Icon>
  );
}

export default WhatsAppIcon;
