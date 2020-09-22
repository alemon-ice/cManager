import React from 'react';

import { Container } from './styles';

import { CheckboxProps } from 'models/InputModels';

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  valueIsImportant,
  setIsImportant,
  ...rest }) => {
  return (
    <Container>
      <input type="checkbox" id={name} onChange={() => setIsImportant(!valueIsImportant)} checked={valueIsImportant} {...rest} />
      <label htmlFor={name}>{label}</label>
    </Container>
  );
}

export default Checkbox;