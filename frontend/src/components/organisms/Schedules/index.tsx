import React from 'react';

import { ScheduleHeader, ScheduleList, NoDate } from './styles';
import { ScheduleItem } from 'components/molecules';

import { ScheduleData } from 'models/ScheduleModels';

interface SchedulesProps {
  title: string;
  schedules: ScheduleData[];
}

const Schedules: React.FC<SchedulesProps> = ({ title, schedules }) => {
  return (
    <>
      <ScheduleHeader>
        <h1>{title}</h1>
      </ScheduleHeader>
      <ScheduleList>
        {
          schedules.length > 0
            ? schedules.map(schedule => <ScheduleItem key={schedule.id} itemData={schedule} />)
            : <NoDate>Nenhum agendamento para esta data...</NoDate>
        }
      </ScheduleList>
    </>
  );
}

export default Schedules;