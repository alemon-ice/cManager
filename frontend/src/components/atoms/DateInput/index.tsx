import React from 'react';

import { Container } from './styles';

import { InputProps } from 'models/InputModels';

const DateInput: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <div className="inputs">
        <input type="text" id="day" {...rest} placeholder="Dia" />
        <input type="text" id="month" {...rest} placeholder="Mês" />
        <input type="text" id="year" {...rest} placeholder="Ano" />
      </div>
    </Container>
  );
}

export default DateInput;