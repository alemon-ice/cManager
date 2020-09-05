export interface ButtonProps {
  styleButton?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  onClick?: () => void;
  children: string;
}
