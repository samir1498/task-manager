import TaskService from "../../adapters/task/TaskService"
import { TaskType, loadingSignal, selectedTask } from "../../core/domain/task"
import editIcon from "./../assets/edit_icon.svg"
import deleteIcon from "./../assets/trash_can_icon.svg"

type TaskProps = {
  task: TaskType
}

export default function Task({ task }: TaskProps) {
  return (
    <>
      <div
        className={`relative m-2 flex w-3/6 flex-col gap-2 rounded-lg border p-4 shadow-md ${
          task.status === "Completed" ? "bg-gray-100" : ""
        }`}
      >
        {task.status !== "Completed" && (
          <div className="absolute right-0 flex justify-center gap-2 p-1 pr-2">
            <button>
              <img
                src={deleteIcon}
                alt="delete_icon"
                className=" "
                onClick={() => TaskService.delete(task?.id)}
              />
            </button>
            <button type="button">
              <img
                src={editIcon}
                alt="edit_icon"
                onClick={() => {
                  selectedTask.value = task
                }}
              />
            </button>
          </div>
        )}
        <h3 className="text-xl font-semibold">{task.title}</h3>
        <p className="text-gray-600">{task.description}</p>
        <div className="mt-2 flex justify-between">
          <p className="text-sm">Due Date: {task.dueDate.toString()}</p>
          <p className="text-sm">Priority: {task.priority}</p>
          <p className="text-sm">Status: {task.status}</p>
        </div>
        {task.status !== "Completed" && (
          <button
            onClick={() => {
              TaskService.complete(task)
            }}
            className="mt-4 max-w-fit self-center rounded-lg bg-green-400 px-4 py-2 font-bold text-white disabled:bg-gray-500"
            disabled={loadingSignal.value}
          >
            complete
          </button>
        )}
      </div>
    </>
  )
}
