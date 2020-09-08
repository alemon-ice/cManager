import React from 'react';

import { CalendarProps } from 'react-calendar'

import { ReactCalendar } from './styles';

const Calendar: React.FC<CalendarProps> = ({ onChange, value, calendarType }) => {
  return (
    <ReactCalendar
      onChange={onChange}
      value={value}
      calendarType={calendarType}
    />
  );
}

export default Calendar;