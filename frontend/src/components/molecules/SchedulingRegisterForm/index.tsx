import React, { useState, FormEvent } from 'react';

import api from 'services/api';

import { Input, Textarea, DateInput, TimeInput } from 'components/atoms';
import { Container } from './styles';

const SchedulingRegisterForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');
  const [is_important, setIsImportant] = useState(true);

  const handleAddScheduling = (e: FormEvent) => {
    e.preventDefault();

    try {
      const message: Promise<any> = api.post('schedules', {
        title,
        description,
        date: `${year}-${month}-${day}`,
        start_time,
        end_time,
        is_important,
      });

      console.log(message);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <form id="submit-scheduling" onSubmit={handleAddScheduling}>
        <Input
          name="title"
          label="Título:"
          placeholder="Adicione um título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea
          name="description"
          label="Descrição:"
          placeholder="Adicione uma descrição"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <DateInput
          name="date"
          label="Data:"
          valueInputDay={day}
          valueInputMonth={month}
          valueInputYear={year}
          onChangeDay={e => setDay(e.target.value)}
          onChangeMonth={e => setMonth(e.target.value)}
          onChangeYear={e => setYear(e.target.value)}
        />
        <TimeInput
          name="time"
          labelStartTime="Das:"
          labelEndTime="às:"
          valueInputStartTime={start_time}
          valueInputEndTime={end_time}
          onChangeStartTime={e => setStartTime(e.target.value)}
          onChangeEndTime={e => setEndTime(e.target.value)}
        />
      </form>
    </Container>
  );
}

export default SchedulingRegisterForm;