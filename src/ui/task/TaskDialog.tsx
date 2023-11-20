import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { TaskSchema, TaskType } from "../../core/domain/task"
import { addTask, selectedTask } from "../../state/dialogSignal"
import { createPortal } from "react-dom"

type TaskDialogProps = {
  onSubmit: (data: TaskType) => void
}

export default function TaskDialog({ onSubmit }: TaskDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TaskType>({
    resolver: zodResolver(TaskSchema),
    defaultValues: selectedTask.value,
  })

  return createPortal(
    <>
      <div className="OVERLAY z-1 fixed inset-0 bg-black opacity-70"></div>
      <div className="FORM z-1 fixed right-1/2 top-1/2 w-4/12 -translate-y-1/2 translate-x-1/2 overflow-hidden rounded-lg border border-black bg-white p-4 px-4">
        <button
          type="button"
          className="absolute right-0 top-0 ml-1 flex items-center justify-center self-center rounded-none rounded-bl-lg bg-red-500 p-2 text-white"
          onClick={() => {
            addTask.value = false
            selectedTask.value = undefined
          }}
        >
          &times;
        </button>

        <h2 className="w-full p-4 text-center text-3xl font-bold">
          Add New Task
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative grid w-full grid-cols-2 p-4 pb-0"
        >
          <label htmlFor="todo" className="my-2 font-bold">
            Title:
          </label>
          <input
            type="text"
            id="todo"
            className="my-2 rounded-lg border border-solid border-black"
            autoFocus
            {...register("title")}
          />

          {errors.title && (
            <span className="col-span-full text-center text-xs text-red-600">
              {errors.title.message}
            </span>
          )}

          <label htmlFor="description" className="my-2 font-bold">
            Description:
          </label>
          <textarea
            id="description"
            rows={3}
            className="my-2 w-full resize-none rounded-lg border border-solid border-black "
            {...register("description")}
          />
          {errors.description && (
            <span className="col-span-full text-center text-xs text-red-600">
              {errors.description.message}
            </span>
          )}

          <label htmlFor="dueDate" className="my-2 font-bold">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            className="my-2 w-full resize-none rounded-lg border border-solid border-black text-center"
            {...register("dueDate", { valueAsDate: true })}
          />
          {errors.dueDate && (
            <span className="col-span-full text-center text-xs text-red-600">
              {errors.dueDate.message}
            </span>
          )}
          <label htmlFor="priority" className="my-2 font-bold">
            Priority:
          </label>
          <select
            id="priority"
            className="my-1 rounded-lg border border-solid border-black px-4 py-1 text-center"
            {...register("priority")}
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          {errors.priority && (
            <span className="col-span-full text-center text-xs text-red-600">
              {errors.priority.message}
            </span>
          )}

          <button
            type="submit"
            className="col-span-full mx-auto my-3 mb-0 mt-4 rounded-lg border border-solid border-black bg-gray-700 px-8 py-1 font-bold text-white hover:bg-white hover:text-gray-700"
          >
            Add Task
          </button>
        </form>
      </div>
    </>,
    document.body,
  )
}
