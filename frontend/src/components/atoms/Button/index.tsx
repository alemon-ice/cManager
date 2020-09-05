import React from 'react';

import { ButtonProps } from 'models/ButtonModels';
import { StyledButton } from './styles';

const Button: React.FC<ButtonProps> = ({
  styleButton = 'primary',
  onClick,
  children,
  ...props
}) => {
  return (
    <StyledButton
      className={`default button-${styleButton}`}
      {...props}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
