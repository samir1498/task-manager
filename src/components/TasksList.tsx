import {Task as TaskType} from "../types/task";
import Task from "./Task";

type TasksListProps = {
    tasks: TaskType[]; // Use the alias TaskType here
  };
function TasksList({ tasks }: TasksListProps) {
    return (
        <div className="flex flex-col justify-start min-h-screen overflow-auto">
          {tasks.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      );
}

export default TasksList