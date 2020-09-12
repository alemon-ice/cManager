import React from 'react';

import { Container } from './styles';

import { TimeInputProps } from 'models/InputModels';

const TimeInput: React.FC<TimeInputProps> = ({
  name,
  labelStartTime,
  labelEndTime,
  valueInputStartTime,
  valueInputEndTime,
  onChangeStartTime,
  onChangeEndTime,
  ...rest
}) => {
  return (
    <Container>
      <label className="start-time-label" htmlFor={name}>{labelStartTime}</label>
      <input
        className="start-time-input"
        type="time"
        id="start-time"
        value={valueInputStartTime}
        onChange={onChangeStartTime}
        {...rest}
      />
      <label className="end-time-label" htmlFor={name}>{labelEndTime}</label>
      <input
        className="end-time-input"
        type="time"
        id="end-time"
        value={valueInputEndTime}
        onChange={onChangeEndTime}
        {...rest}
      />
    </Container>
  );
}

export default TimeInput;