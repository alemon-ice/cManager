import { Request, Response } from 'express';
import { parseISO, isPast } from 'date-fns';

import connection from '../database/connection';

export default class SchedulesController {
  index = async (request: Request, response: Response): Promise<Response> => {
    const schedules = await connection('schedules').select('*');

    return response.json(schedules);
  };

  create = async (request: Request, response: Response): Promise<Response> => {
    const { title, description, date_time, is_important } = request.body;

    const trx = await connection.transaction();

    const scheduleDateTime = parseISO(date_time);

    if (isPast(scheduleDateTime)) {
      await trx.rollback();
      return response.send(
        'A data definida já passou e não pode ser selecidonada.',
      );
    }

    const dateTimeExists = await trx('schedules')
      .where('date_time', scheduleDateTime)
      .select('id')
      .first();

    if (dateTimeExists) {
      await trx.rollback();
      return response.send('A data definida já possui um agendamento.');
    }

    const schedule = {
      title,
      description,
      date_time: scheduleDateTime,
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
