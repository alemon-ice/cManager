import React from 'react';

import { Background, Container, Header, Body, Footer } from './styles';
import { Button } from 'components/atoms';

import { ModalProps } from 'models/ModalModels';

const Modal: React.FC<ModalProps> = ({ title, content, setIsModalVisible }) => {
  return (
    <Background>
      <button className="close-modal" onClick={() => setIsModalVisible(false)}>
        X{/* FIXME icone provisório */}
      </button>
      <Container>
        <Header>
          <h4>{title}</h4>
        </Header>
        <Body>
          {content}
        </Body>
        <Footer>
          <Button type="submit" form="submit-scheduling" styleButton="primary">Agendar</Button>
          <Button styleButton="tertiary" onClick={() => setIsModalVisible(false)}>cancelar</Button>
        </Footer>
      </Container>
    </Background>
  );
}

export default Modal;