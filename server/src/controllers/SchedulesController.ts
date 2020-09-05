import { Request, Response } from 'express';
import { parseISO, isPast, isBefore, isAfter } from 'date-fns';

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

    const checkIftimeIsValid = (
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

        if (
          start_time === schedule.start_time ||
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
      const [timeIsValid] = checkIftimeIsValid(schedulesOnDate);

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
      await trx('schedules').insert(schedule);

      await trx.commit();

      return response.status(201);
    } catch (err) {
      return response.send({ error: err });
    }
  };

  update = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;
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
      .select('id', 'start_time', 'end_time');

    const CheckIftimeIsValid = (
      schedulesArray: {
        id: string;
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

        if (
          ((isAfter(scheduleStartDateTime, existingScheduleStartDateTime) &&
            isBefore(scheduleStartDateTime, existingScheduleEndDateTime)) ||
            (isAfter(scheduleEndDateTime, existingScheduleStartDateTime) &&
              isBefore(scheduleEndDateTime, existingScheduleEndDateTime)) ||
            (isBefore(scheduleStartDateTime, existingScheduleStartDateTime) &&
              isAfter(scheduleEndDateTime, existingScheduleEndDateTime))) &&
          schedule.id !== id
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
      await trx('schedules').update(schedule).where({ id });

      await trx.commit();

      return response.status(200).send('Agendamento atualizado com sucesso');
    } catch (err) {
      return response.json({ error: err });
    }
  };

  delete = async (request: Request, response: Response): Promise<Response> => {
    const { id } = request.params;

    const trx = await connection.transaction();

    const checkIdExists = await trx('schedules').where({ id }).first();

    if (!checkIdExists) {
      await trx.rollback();
      return response.send('O ID informado não existe na tabela.');
    }

    try {
      await trx('schedules').where({ id }).del();

      await trx.commit();
      return response.status(200).send('Agendamento deletado com sucesso.');
    } catch (err) {
      return response.json({ error: err });
    }
  };
}
