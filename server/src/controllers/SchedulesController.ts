import { Request, Response } from 'express';
import { parseISO, isPast, startOfHour, isBefore, isAfter } from 'date-fns';

import connection from '../database/connection';

export default class SchedulesController {
  index = async (request: Request, response: Response): Promise<Response> => {
    const schedules = await connection('schedules').select('*');

    return response.json(schedules);
  };

  create = async (request: Request, response: Response): Promise<Response> => {
    const {
      title,
      description,
      date,
      start_time,
      end_time,
      is_important,
    } = request.body;

    const trx = await connection.transaction();

    const scheduleStartDateTime = parseISO(`${date}T${start_time}`);
    const scheduleEndDateTime = parseISO(`${date}T${end_time}`);

    if (isPast(scheduleStartDateTime)) {
      await trx.rollback();
      return response.send(
        'A data definida já passou e não pode ser selecidonada.',
      );
    }

    const schedulesOnDate = await trx('schedules')
      .where('date', date)
      .select('start_time', 'end_time');

    const CheckIftimeIsValid = (
      schedulesArray: {
        start_time: string;
        end_time: string;
      }[],
    ) => {
      const scheduleExists = schedulesArray.filter(schedule => {
        const existingScheduleStartDateTime = parseISO(
          `${date}T${schedule.start_time}`,
        );
        const existingScheduleEndDateTime = parseISO(
          `${date}T${schedule.end_time}`,
        );

        // if (scheduleStartDateTime === existingScheduleStartDateTime) {
        //   console.log('teste 0');
        // }
        // FIXME refazer verificação

        if (
          (isAfter(scheduleStartDateTime, existingScheduleStartDateTime) &&
            isBefore(scheduleStartDateTime, existingScheduleEndDateTime)) ||
          (isAfter(scheduleEndDateTime, existingScheduleStartDateTime) &&
            isBefore(scheduleEndDateTime, existingScheduleEndDateTime)) ||
          (isBefore(scheduleStartDateTime, existingScheduleStartDateTime) &&
            isAfter(scheduleEndDateTime, existingScheduleEndDateTime))
        ) {
          return true;
        }
      });

      return scheduleExists;
    };

    if (schedulesOnDate.length > 0) {
      const [timeIsValid] = CheckIftimeIsValid(schedulesOnDate);

      if (timeIsValid) {
        await trx.rollback();
        return response.send('Já existe um agendamento para este horário.');
      }
    }

    const schedule = {
      title,
      description,
      date,
      start_time,
      end_time,
      is_important,
    };

    try {
      const [scheduleId] = await trx('schedules')
        .insert(schedule)
        .returning('id');

      await trx.commit();

      return response.status(201).json({ id: scheduleId });
    } catch (err) {
      return response.send({ error: err });
    }
  };
}
