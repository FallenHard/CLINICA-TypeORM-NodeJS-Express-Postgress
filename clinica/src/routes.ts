import { Request, Response, Router } from 'express'
import TasksController from './controller/TasksController'
import tasksRouter from './controller/TasksController';

const routers = Router();

routers.use('/tasks', tasksRouter);

routers.get('/tasks/:id', tasksRouter)

export default routers;