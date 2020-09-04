import React from 'react'

import './styles.css'

import { ButtonProps } from '../../../models/ButtonModels'

const Button: React.FC<ButtonProps> = ({
  styleButton = 'primary',
  children,
  ...props
}) => {
  return (
    <button className={`default button-${styleButton}`} {...props}>
      {children}
    </button>
  )
}

export default Button
