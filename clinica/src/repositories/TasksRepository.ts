import Tasks from "../entity/tasks";
import ITasks from "../interfaces/ITasks";
import { AppDataSource } from "../data-source";

const tasksRepository = AppDataSource.getRepository(Tasks);

const getTasks = (): Promise<ITasks[]> => {
    return tasksRepository.find();
}

const getOneTasks = (id): Promise<ITasks> => {
    return tasksRepository.findOne({where:id})
}

export default { getTasks, getOneTasks };

