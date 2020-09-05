import React, { useState, useEffect } from 'react';

import { CircularButtonProps } from 'models/CircularButtonModels';
import addSvg from 'assets/images/icons/add.svg';
import { Button } from './styles';

const CircularButton: React.FC<CircularButtonProps> = ({
  icon,
  onClick,
  ...props
}) => {
  const [getChildren, setChildren] = useState<JSX.Element>();

  useEffect(() => {
    if (icon === 'add') {
      setChildren(<img src={addSvg} alt="Novo agendamento" />);
    }
  }, [icon]);

  return (
    <Button onClick={onClick} {...props}>
      {getChildren}
    </Button>
  );
};

export default CircularButton;
