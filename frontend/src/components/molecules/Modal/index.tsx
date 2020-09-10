import React from 'react';

import { Background, Container, Header, Body, Footer } from './styles';
import { Button } from 'components/atoms';

import { ModalProps } from 'models/ModalModels';

const Modal: React.FC<ModalProps> = ({ title, content, setIsModalVisible }) => {
  return (
    <Background>
      <Container>
        <Header>
          <div />
          <h4>{title}</h4>
          <button onClick={() => setIsModalVisible(false)}>X</button>
        </Header>
        <Body>
          {content}
        </Body>
        <Footer>
          <Button styleButton="tertiary">cancelar</Button>
          <Button styleButton="primary">Agendar</Button>
        </Footer>
      </Container>
    </Background>
  );
}

export default Modal;