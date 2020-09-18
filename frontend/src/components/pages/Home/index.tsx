import React, { useEffect, useState } from 'react';

import { useFetch } from 'hooks/useFetch';
import api from 'services/api';

import { Container, CalendarContainer } from './styles'

import { Button, CircularButton } from 'components/atoms';
import { Header, Modal, SchedulingRegisterForm } from 'components/molecules';
import { Calendar, Schedules } from 'components/organisms';

import { ScheduleData, ScheduleDataSent } from 'models/ScheduleModels';

const Home: React.FC = () => {
  const [getFormatedDate, setFormatedDate] = useState<string>();
  const [getContent, setContent] = useState<JSX.Element>();
  const [getCurrentDate, setCurrentDate] = useState<Date>();
  const [getTitleDate, setTitleDate] = useState('');
  const [getIsModalVisible, setIsModalVisible] = useState(false);
  const [getSchedulingItem, setSchedulingItem] = useState<ScheduleData>();

  const formatMonth = (month: string) => {
    switch (month) {
      case '01':
        return 'Janeiro';
      case '02':
        return 'Fevereiro';
      case '03':
        return 'Março';
      case '04':
        return 'Abril';
      case '05':
        return 'Maio';
      case '06':
        return 'Junho';
      case '07':
        return 'julho';
      case '08':
        return 'Agosto';
      case '09':
        return 'Setembro';
      case '10':
        return 'Outubro';
      case '11':
        return 'Novembro';
      case '12':
        return 'Dezembro';
    }
  }

  const { data, mutate } = useFetch<ScheduleData[]>(`schedules?date=${getFormatedDate}`);

  const formatCurrentDate = (date: Date) => {
    setCurrentDate(date);

    const day = date.getDate().toString();
    const formatedDay = (day.length === 1) ? '0' + day : day;
    const month = (date.getMonth() + 1).toString();
    const formatedMonth = (month.length === 1) ? '0' + month : month;
    const formatedYear = date.getFullYear();

    const stringMonth = formatMonth(formatedMonth);

    const title = `${formatedDay} de ${stringMonth} de ${formatedYear}`
    setTitleDate(title);

    return `${formatedYear}-${formatedMonth}-${formatedDay}`
  }

  useEffect(() => {
    const currentDate = new Date();
    const formatedCurrentDate = formatCurrentDate(currentDate);

    setFormatedDate(formatedCurrentDate);
  }, []);

  useEffect(() => {
    data
      ? setContent(
        <Schedules
          title={getTitleDate}
          schedules={data}
          handleCompleteSchedule={handleCompleteSchedule}
          handleEditSchedule={handleEditSchedule}
          handleDeleteSchedule={handleDeleteSchedule}
        />
      )
      : setContent(<div className="message"><p>Carregando agendamentos...</p></div>)
  }, [data]);

  const handleAddScheduling = async (scheduleData: ScheduleDataSent, scheduleId?: number) => {

    try {

      if (!scheduleId) {
        await api.post('schedules', scheduleData);
      } else {
        api.put(`schedules/${scheduleId}`, scheduleData);

        const updatedSchedule = data?.map(schedule => {
          if (schedule.id === scheduleId) {
            return { ...scheduleData, id: scheduleId }
          }

          return schedule;
        });

        mutate(updatedSchedule, false);
      }

      setIsModalVisible(false);
      alert('Agendamento salvo com sucesso.');  // FIXME personalizar mensagem
    } catch (err) {
      alert('Erro no servidor.');  // FIXME personalizar mensagem
      console.log(err);
    }
  }

  const selectDate = (date: any) => {
    const formatedDate = formatCurrentDate(date);

    setFormatedDate(formatedDate);
  }

  const handleAddSchedule = () => {
    setIsModalVisible(!getIsModalVisible);
  };

  const handleCompleteSchedule = (id?: number) => {

    try {
      api.patch(`schedules/${id}`, { is_completed: true });

      const updatedSchedule = data?.map(schedule => {
        if (schedule.id === id) {
          return { ...schedule, is_completed: true }
        }

        return schedule;
      });

      mutate(updatedSchedule, false);

      alert('Agendamento concluído com sucesso.');  // FIXME personalizar mensagem
    } catch (err) {
      alert('Erro no servidor'); // FIXME personalizar mensagem
      console.log(err);
    }
  }

  const handleEditSchedule = (schedule?: ScheduleData) => {
    schedule && setSchedulingItem(schedule);
    setIsModalVisible(!getIsModalVisible);
  }

  const handleDeleteSchedule = (id?: number) => {
    const response = window.confirm('Deseja mesmo excluir este agendamento?'); // FIXME personalizar mensagem

    if (response) {
      try {
        api.delete(`schedules/${id}`);

        const updatedSchedulesList = data?.filter(schedule => {
          if (schedule.id !== id) {
            return schedule;
          }
        });

        mutate(updatedSchedulesList, false);
      } catch (err) {
        alert('Erro no servidor');
        console.log(err);
      }
    }
  }

  return (
    <>
      <Header>
        <Button styleButton="secondary" onClick={handleAddSchedule}>
          Novo agendamento
        </Button>
      </Header>

      <Container>
        <CalendarContainer>
          <Calendar
            onChange={date => selectDate(date)}
            value={getCurrentDate}
            calendarType="ISO 8601"
          />
        </CalendarContainer>
        <CalendarContainer>
          {
            getContent
          }
        </CalendarContainer>
      </Container>

      <CircularButton icon="add" onClick={handleAddSchedule} />
      {
        getIsModalVisible && <Modal title="Novo agendamento" content={<SchedulingRegisterForm currentDate={getFormatedDate} scheduleItem={getSchedulingItem} handleAddScheduling={handleAddScheduling} />} setIsModalVisible={setIsModalVisible} />
      }
    </>
  );
};

export default Home;
