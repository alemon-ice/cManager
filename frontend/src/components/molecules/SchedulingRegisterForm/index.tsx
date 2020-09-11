import React from 'react';

import { Input, Textarea, DateInput } from 'components/atoms';
import { Container } from './styles';

const SchedulingRegisterForm: React.FC = () => {
  return (
    <Container>
      <Input
        name="title"
        label="Título:"
        placeholder="Adicione um título"
      // value={title}
      // onChange={e => setTitle(e.target.value)}
      />
      <Textarea
        name="description"
        label="Descrição:"
        placeholder="Adicione uma descrição"
      // value={description}
      // onChange={e => setDescription(e.target.value)}
      />
      <DateInput
        name="date"
        label="Data:"
      // value={date}
      // onChange={e => setDate(e.target.value)}
      />
    </Container>
  );
}

export default SchedulingRegisterForm;