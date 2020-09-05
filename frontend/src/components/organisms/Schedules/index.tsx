import React from 'react';

import { ScheduleHeader, ScheduleList } from './styles';
import { ScheduleItem } from 'components/molecules'

import { ScheduleData } from 'models/ScheduleModels'

interface SchedulesProps {
  schedules: ScheduleData[];
}

const Schedules: React.FC<SchedulesProps> = ({ schedules }) => {
  return (
    <>
      <ScheduleHeader>
        <h1>17 de agosto</h1>
      </ScheduleHeader>
      <ScheduleList>
        {
          schedules.map(schedule => <ScheduleItem key={schedule.id} itemData={schedule} />)
        }
      </ScheduleList>
    </>
  );
}

export default Schedules;