import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleButton?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  disabled?: boolean;
  children: React.ReactNode;
}
