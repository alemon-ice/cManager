import React from 'react';

import cManagerLogo from 'assets/images/logo.png';
import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return (
    <Container>
      <img src={cManagerLogo} alt="Logo" />
      {children}
    </Container>
  );
};

export default Header;
