import React, { useState, useEffect } from 'react'

import './styles.css'
import addSvg from '../../../assets/images/icons/add-24px.ico'

export interface ButtonProps {
  styleButton?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'circle'
}

const Button: React.FC<ButtonProps> = ({
  styleButton = 'primary',
  children,
  ...props
}) => {
  const [getChildren, setChildren] = useState(children)

  useEffect(() => {
    styleButton === 'circle'
      ? setChildren(<img src={addSvg} alt="Novo agendamento" />)
      : setChildren(children)
  }, [])
  return (
    <button className={`default button-${styleButton}`} {...props}>
      {getChildren}
    </button>
  )
}

export default Button
