import React, { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';

import { CircularButtonProps } from 'models/CircularButtonModels';
import addSvg from 'assets/images/icons/add.svg';
import { Button } from './styles';

const CircularButton: React.FC<CircularButtonProps> = ({
  icon,
  ...props
}) => {
  const [getChildren, setChildren] = useState<JSX.Element>();

  useEffect(() => {
    if (icon === 'add') {
      setChildren(<FiPlus size={25} />);
    }
  }, [icon]);

  return (
    <Button {...props}>
      {getChildren}
    </Button>
  );
};

export default CircularButton;
