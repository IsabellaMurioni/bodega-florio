import Icon, { type IconProps } from '@/components/ui/icons/Icon';
import type { ContactReason } from '@/types';

// Stroke paths per contact reason: pin, cutlery, bottle, boxes.
const paths: Record<ContactReason['id'], string[]> = {
  turismo: [
    'M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z',
    'M14.3 10a2.3 2.3 0 1 1-4.6 0 2.3 2.3 0 0 1 4.6 0z',
  ],
  comedor: ['M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10', 'M17 21V3c-2 1-3 3.5-3 7h3'],
  minorista: ['M10 2h4M10.5 2v4.5L8.5 10v11h7V10l-2-3.5V2', 'M8.5 14h7'],
  mayorista: ['M3 12h8v8H3zM13 12h8v8h-8zM8 4h8v8H8z'],
};

/** Small stroke icon for a contact reason. */
function ReasonIcon({ reason, ...props }: IconProps & { reason: ContactReason['id'] }) {
  return (
    <Icon {...props}>
      {paths[reason].map((d) => (
        <path key={d} d={d} />
      ))}
    </Icon>
  );
}

export default ReasonIcon;
