import { Router } from 'express';

import { SchedulesController } from './controllers/index';

const app = Router();

const schedulesController = new SchedulesController();

app.get('/schedules', schedulesController.index);
app.post('/schedules', schedulesController.create);
app.put('/schedules/:id', schedulesController.update);

export default app;
