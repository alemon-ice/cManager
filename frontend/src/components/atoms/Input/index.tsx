import React from 'react';

import { Container } from './styles';

import { InputProps } from 'models/InputModels';

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </Container>
  );
}

export default Input;