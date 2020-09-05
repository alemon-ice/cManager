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

  useEffect(() => {
    const getData = async () => {
      const data = await api.get('schedules')
      data && setData(data.data);
    }
    getData();
  }, [])

  console.log(getData)

  const data = [
    {
      date: "2020-09-03",
      description: "Reunião importante",
      end_time: "18:00",
      id: 5,
      is_important: 1,
      start_time: "16:00",
      title: "Reunião",
    },
    {
      date: "2020-09-03",
      description: "Reunião importante",
      end_time: "18:00",
      id: 5,
      is_important: 1,
      start_time: "16:00",
      title: "Avaliação de Inglês",
    },
    {
      date: "2020-09-03",
      description: "Reunião importante",
      end_time: "18:00",
      id: 5,
      is_important: 1,
      start_time: "16:00",
      title: "Reunião",
    },
    {
      date: "2020-09-03",
      description: "Reunião importante",
      end_time: "18:00",
      id: 5,
      is_important: 1,
      start_time: "16:00",
      title: "Reunião",
    },
  ]

  useEffect(() => {
    getData
      ? setContent(<Schedules schedules={getData} />)
      : setContent(<Schedules schedules={data} />)
    // : setContent(<p>Carregando...</p>)
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
