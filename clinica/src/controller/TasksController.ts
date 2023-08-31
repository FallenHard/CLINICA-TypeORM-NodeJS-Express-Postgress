import { Request, Response, Router } from "express";
import Tasks from "../entity/tasks";
import TasksRepository from '../repositories/TasksRepository'
import ITasks from "../interfaces/ITasks";

const tasksRouter = Router();

tasksRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    const tasks = await TasksRepository.getTasks();
    return res.status(200).json(tasks);
});

tasksRouter.get('/tasks/:id', async (req: Request, res: Response): Promise<Response> => {
    const id = req.params;
    const tasks = await TasksRepository.getOneTasks(id);
    return res.status(200).json(tasks);
});

export default tasksRouter;