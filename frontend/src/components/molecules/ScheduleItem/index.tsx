import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import addSvg from 'assets/images/icons/black-add.svg';

import { ScheduleData } from 'models/ScheduleModels';

interface ScheduleItemProps {
  itemData: ScheduleData;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ itemData }) => {
  const [schedule, setSchedule] = useState<ScheduleData>();

  useEffect(() => {
    itemData && setSchedule(itemData);
  }, []);

  return (
    <Container>
      <div>
        <div>
          <p>das {schedule?.start_time}</p>
          <p>às {schedule?.end_time}</p>
        </div>
      </div>
      <div>
        <h2>{schedule?.title}</h2>
      </div>
      <div>
        <img src={addSvg} alt="Novo agendamento" /> {/* FIXME ícone provisório */}
      </div>
    </Container>
  );
}

export default ScheduleItem;