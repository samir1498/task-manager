import {Task} from '../types/task';

interface TaskProps {
    task: Task;
  }
  
export default function Task({task} : TaskProps) {
    return (
        <div className="flex flex-col items-center w-6/12 self-center">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Priority: {task.priority}</p>
          <p>Status: {task.status}</p>
        </div>
      );
}
