import React from 'react';

import { Container } from './styles';

import { DateInputProps } from 'models/InputModels';

const DateInput: React.FC<DateInputProps> = ({
  name,
  label,
  valueInputDay,
  valueInputMonth,
  valueInputYear,
  onChangeDay,
  onChangeMonth,
  onChangeYear,
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <div className="inputs">
        <input
          type="text"
          id="day"
          placeholder="Dia"
          value={valueInputDay}
          onChange={onChangeDay}
          {...rest}
        />
        <input
          type="text"
          id="month"
          placeholder="Mês"
          value={valueInputMonth}
          onChange={onChangeMonth}
          {...rest}
        />
        <input
          type="text"
          id="year"
          placeholder="Ano"
          value={valueInputYear}
          onChange={onChangeYear}
          {...rest}
        />
      </div>
    </Container>
  );
}

export default DateInput;