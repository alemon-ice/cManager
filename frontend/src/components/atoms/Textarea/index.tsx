import React from 'react';

import { Container } from './styles';

import { TextareaProps } from 'models/InputModels';

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </Container>
  );
}

export default Textarea;