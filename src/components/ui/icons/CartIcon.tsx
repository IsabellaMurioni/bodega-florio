import Icon, { type IconProps } from './Icon';

function CartIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6h15l-1.5 9h-12z" />
      <path d="M6 6 5 3H2" />
      <circle cx="9.5" cy="19.5" r="1.3" />
      <circle cx="17.5" cy="19.5" r="1.3" />
    </Icon>
  );
}

export default CartIcon;
