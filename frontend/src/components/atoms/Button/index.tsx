import React, { useState } from 'react';

import { StyledButton } from './styles';

import { ButtonProps } from 'models/ButtonModels';

const Button: React.FC<ButtonProps> = ({
  styleButton = 'primary',
  children,
  disabled = false,
  ...props
}) => {
  const [getIsDisabled, _] = useState(
    disabled && 'disabled'
  );

  return (
    <StyledButton
      className={`default button-${styleButton} ${getIsDisabled}`}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
