import React, { useState, useEffect, FormEvent } from 'react';

import api from 'services/api';

import { Input, Textarea, DateInput, TimeInput } from 'components/atoms';
import { Container } from './styles';

import { ScheduleData } from 'models/ScheduleModels';

interface SchedulingRegisterFormProps {
  scheduleId?: number;
  currentDate?: string;
  setIsModalVisible: (value: boolean) => void;
}

const SchedulingRegisterForm: React.FC<SchedulingRegisterFormProps> = ({ scheduleId, currentDate, setIsModalVisible }) => {
  const [getScheduleData, setScheduleData] = useState<ScheduleData>();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [start_time, setStartTime] = useState('');
  const [end_time, setEndTime] = useState('');
  const [is_important, setIsImportant] = useState<boolean>(false);

  const handleSplitDate = (date: string) => {
    const splitDate = date.split('-');

    return splitDate;
  }

  useEffect(() => {
    const getScheduleData = async () => {
      const scheduleData = await api.get(`schedules/${scheduleId}`);
      setScheduleData(scheduleData.data);
    }
    scheduleId && getScheduleData();
    if (currentDate) {
      const splitDate = handleSplitDate(currentDate);

      setDay(splitDate[2]);
      setMonth(splitDate[1]);
      setYear(splitDate[0]);
    }
  }, []);

  useEffect(() => {
    if (getScheduleData) {
      const splitDate = handleSplitDate(getScheduleData.date);

      setTitle(getScheduleData.title);
      getScheduleData.description && setDescription(getScheduleData.description);
      setDay(splitDate[2]);
      setMonth(splitDate[1]);
      setYear(splitDate[0]);
      setStartTime(getScheduleData.start_time);
      setEndTime(getScheduleData.end_time);
      setIsImportant(!!getScheduleData.is_important);
    }
  }, [getScheduleData]);

  const handleAddScheduling = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (!scheduleId) {
        await api.post('schedules', {
          title,
          description,
          date: `${year}-${month}-${day}`,
          start_time,
          end_time,
          is_important,
        });
      } else {
        await api.put(`schedules/${scheduleId}`, {
          title,
          description,
          date: `${year}-${month}-${day}`,
          start_time,
          end_time,
          is_important,
        });
      }

      setIsModalVisible(false);
      alert('Agendamento salvo com sucesso.');  // FIXME criar mensagem estilizada
    } catch (err) {
      alert('Erro no seridor.');  // FIXME criar mensagem estilizada
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