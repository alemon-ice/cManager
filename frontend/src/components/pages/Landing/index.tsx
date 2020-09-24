import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import { Button } from 'components/atoms';

import homePage from '../../../assets/images/panel.jpeg';
import workingLate from '../../../assets/images/working-late.png';

const landing: React.FC = () => {
  return (
    <Container>
      <div className="presentation">
        <div className="content">
          <img src={workingLate} alt="Ilustração" />

          <div className="description">
            <h1>Bem-vindo ao cManager</h1>
            <br />
            <p>
              CManager nada mais é que uma plataforma web de agendamentos que pode
              ser utilizado por qualquer pessoa.
            </p>
            <br />
            <p>
              Nesta aplicação o usuário pode agendar tarefas/compromissos para
              qualquer data e ter uma visão geral de seus agendamentos, além de
              poder editar ou excluir cada item.
            </p>
          </div>
          <Button styleButton="primary">
            <Link
              to="/panel"
              style={
                {
                  color: '#FFF',
                  textDecoration: 'none'
                }
              }
            >
              Começar
            </Link>
          </Button>
        </div>
      </div>
      <div className="home-page">
        <div>
          <img src={homePage} alt="Home Page" />
        </div>
      </div>
    </Container >
  );
}

export default landing;