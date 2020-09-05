import React from 'react';

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

      <CircularButton icon="add" onClick={handleAddSchedule} />
    </>
  );
};

export default Home;
