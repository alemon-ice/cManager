import React from 'react';

import { Container, CalendarContainers } from './styles'

import { Button, CircularButton } from 'components/atoms';
import { Header } from 'components/molecules';

const Home: React.FC = () => {
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
        <CalendarContainers />
      </Container>

      <CircularButton icon="add" onClick={handleAddSchedule} />
    </>
  );
};

export default Home;
