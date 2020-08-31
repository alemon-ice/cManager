import { Router } from 'express';

import { SchedulesController } from './controllers/index';

const app = Router();

const schedulesController = new SchedulesController();

app.get('/', schedulesController.index);

export default app;
