import React from 'react';

import { StyledButton } from './styles';

import { ButtonProps } from 'models/ButtonModels';

const Button: React.FC<ButtonProps> = ({
  styleButton = 'primary',
  children,
  ...props
}) => {
  return (
    <StyledButton
      className={`default button-${styleButton}`}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
