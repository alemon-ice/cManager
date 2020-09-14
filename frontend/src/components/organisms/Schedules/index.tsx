import React, { useEffect, useState } from 'react';

import { ScheduleHeader, ScheduleList, NoDate } from './styles';
import { ScheduleItem, Modal, SchedulingRegisterForm } from 'components/molecules';

import { ScheduleData } from 'models/ScheduleModels';

interface SchedulesProps {
  title: string;
  schedules: ScheduleData[];
  handleCompleteSchedule: (id?: number) => void;
  handleEditSchedule: (id?: number) => void;
  handleDeleteSchedule: (id?: number) => void;
}

const Schedules: React.FC<SchedulesProps> = ({
  title,
  schedules,
  handleCompleteSchedule,
  handleEditSchedule,
  handleDeleteSchedule,
}) => {
  return (
    <>
      <ScheduleHeader>
        <h1>{title}</h1>
      </ScheduleHeader>
      <ScheduleList>
        {
          schedules.length > 0
            ? schedules.map(
              schedule => <ScheduleItem
                key={schedule.id}
                itemData={schedule}
                handleCompleteSchedule={handleCompleteSchedule}
                handleEditSchedule={handleEditSchedule}
                handleDeleteSchedule={handleDeleteSchedule}
              />
            )
            : <NoDate>Nenhum agendamento para esta data...</NoDate>
        }
      </ScheduleList>
    </>
  );
}

export default Schedules;