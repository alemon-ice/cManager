import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import addSvg from 'assets/images/icons/black-add.svg';

import { ScheduleData } from 'models/ScheduleModels';

interface ScheduleItemProps {
  itemData: ScheduleData;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ itemData }) => {
  const [schedule, setSchedule] = useState<ScheduleData>();
  const [getShowDetails, setShowDetails] = useState<boolean>(true);

  useEffect(() => {
    itemData && setSchedule(itemData);
  }, [itemData]);

  const showDetails = (scheduleId?: number) => {
    console.log(scheduleId);
    setShowDetails(!getShowDetails);
  }

  return (
    <>
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
          <button type="button" onClick={() => showDetails(schedule?.id)}>
            <img src={addSvg} alt="Novo agendamento" /> {/* FIXME ícone provisório */}
          </button>
        </div>
      </Container>
    </>
  );
}

export default ScheduleItem;