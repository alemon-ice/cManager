import React from 'react'

import { Container } from './styles'
import { Button } from '../../atoms'

import cManagerLogo from '../../../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <Container>
      <img src={cManagerLogo} alt="Logo" />
      <Button styleButton="secondary">Agendar tarefa</Button>
    </Container>
  )
}

export default Header
