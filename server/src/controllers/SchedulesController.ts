import { Request, Response } from 'express';
import connection from '../database/connection';

export default class SchedulesController {
  index = async (request: Request, response: Response): Promise<Response> => {
    const schedules = await connection('schedules').select('*');

    return response.json(schedules);
  };
}
