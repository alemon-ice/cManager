import React from 'react'

import { Button } from '../../atoms'

import './styles.css'

import cManagerLogo from '../../../assets/images/logo.png'

const Header: React.FC = () => {
  return (
    <div className="container">
      <img src={cManagerLogo} alt="Logo" />
      <Button styleButton="secondary">Agendar tarefa</Button>
    </div>
  )
}

export default Header
