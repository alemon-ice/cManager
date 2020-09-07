import React, { useEffect, useState } from 'react';

import api from 'services/api'

import { Container, CalendarContainer } from './styles'

import { Button, CircularButton } from 'components/atoms';
import { Header } from 'components/molecules';
import { Schedules } from 'components/organisms';

import { ScheduleData } from 'models/ScheduleModels';

const Home: React.FC = () => {
  const [getData, setData] = useState<ScheduleData[]>();
  const [getContent, setContent] = useState<JSX.Element>();
  const [getTitleDate, setTitleDate] = useState('');

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

  const getCurrentDate = () => {
    const currentDate = new Date();

    const day = currentDate.getDate().toString();
    const formatedDay = (day.length === 1) ? '0' + day : day;
    const month = (currentDate.getMonth() + 1).toString();
    const formatedMonth = (month.length === 1) ? '0' + month : month;
    const formatedYear = currentDate.getFullYear();

    const stringMonth = formatMonth(formatedMonth);

    const title = `${formatedDay} de ${stringMonth} de ${formatedYear}`
    setTitleDate(title);

    return `${formatedYear}-${formatedMonth}-${formatedDay}`
  }

  useEffect(() => {
    const currentDate = getCurrentDate();
    const getData = async () => {
      const data = await api.get(`schedules?date=${currentDate}`);
      data && setData(data.data);
    }
    getData();
  }, []);

  useEffect(() => {
    getData
      ? setContent(<Schedules title={getTitleDate} schedules={getData} />)
      : setContent(<div className="message"><p>Carregando agendamentos...</p></div>)
  }, [getData])

  const handleAddSchedule = () => {
    alert('Adicionar agendamento');
  };
  return (
    <>
      <Header>
        <Button styleButton="secondary" onClick={handleAddSchedule}>
          Novo agendamento
        </Button>
      </Header>

      <Container>
        <CalendarContainer />
        <CalendarContainer>
          {
            getContent
          }
        </CalendarContainer>
      </Container>

      <CircularButton icon="add" onClick={handleAddSchedule} />
    </>
  );
};

export default Home;
