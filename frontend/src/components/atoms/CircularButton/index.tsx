import React, { useState, useEffect } from 'react'

import { Button } from './styles'

import addSvg from '../../../assets/images/icons/add-24px.ico'

import { CircularButtonProps } from '../../../models/CircularButtonModels'

const CircularButton: React.FC<CircularButtonProps> = ({ icon, ...props }) => {
  const [getChildren, setChildren] = useState<JSX.Element>()

  useEffect(() => {
    icon === 'add' && setChildren(<img src={addSvg} alt="Novo agendamento" />)
  }, [])

  return <Button {...props}>{getChildren}</Button>
}

export default CircularButton
