import React, { useEffect, useState } from 'react';

import api from 'services/api'

import { Container, CalendarContainers, ScheduleHeader } from './styles'

import { Button, CircularButton } from 'components/atoms';
import { Header } from 'components/molecules';

import { ScheduleData, ScheduleDataSent } from 'models/ScheduleModels';

const Home: React.FC = () => {
  const [getData, setData] = useState<ScheduleData>();

  useEffect(() => {
    const getData = async () => {
      const data = await api.get('schedules')
      data && setData(data.data);
    }
    getData();
  }, [])

  useEffect(() => {
    getData && console.log(getData)
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
        <CalendarContainers />
        <CalendarContainers>
          <ScheduleHeader>
            <h1>17 de agosto</h1>
          </ScheduleHeader>
        </CalendarContainers>
      </Container>

      <CircularButton icon="add" onClick={handleAddSchedule} />
    </>
  );
};

export default Home;
