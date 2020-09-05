import React from 'react';

import cManagerLogo from 'assets/images/logo.png';
import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <img src={cManagerLogo} alt="Logo" />
      {/* FIXME Logo provisória */}
      {/* <h1>cManager</h1> */}
      {children}
    </Container>
  );
};

export default Header;
