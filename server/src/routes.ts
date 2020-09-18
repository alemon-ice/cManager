import { Router } from 'express';

import { SchedulesController } from './controllers/index';

const app = Router();

const schedulesController = new SchedulesController();

app.get('/schedules', schedulesController.index);
app.get('/schedules/:id', schedulesController.getSchedule);
app.post('/schedules', schedulesController.create);
app.put('/schedules/:id', schedulesController.update);
app.patch('/schedules/:id', schedulesController.completeTask);
app.delete('/schedules/:id', schedulesController.delete);

export default app;
