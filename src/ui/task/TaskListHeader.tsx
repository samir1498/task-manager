import {
  addTask,
  filteredTasksSignal,
  tasksSignal,
} from "../../core/domain/task"

export default function TaskListHeader() {
  type TaskProperty =
    | "id"
    | "title"
    | "description"
    | "dueDate"
    | "priority"
    | "status"

  function handleFilterTasks(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    filteredTasksSignal.value = tasksSignal.value?.filter((task) => {
      const queryLower = query.toLowerCase()
      for (const key in task) {
        const taskKey = key as TaskProperty
        if (task[taskKey]?.toString().toLowerCase().includes(queryLower)) {
          return true
        }
      }
      return false
    })
  }

  return (
    <>
      <div className="relative mx-auto flex w-full justify-center pt-2">
        <div className="flex w-3/6 flex-grow-0 items-center justify-end p-1">
          <input
            type="text"
            name="search"
            placeholder="Search tasks..."
            className="h-8 w-5/6 flex-grow rounded-lg border border-solid border-black p-2"
            autoFocus
            onChange={handleFilterTasks}
          />

          <button
            className="m-2 flex w-4/12 content-center items-center justify-center gap-1 rounded-xl bg-green-500 p-1 px-2 font-bold text-white"
            onClick={() => {
              addTask.value = true
            }}
          >
            <span className=" font-bold">New Task</span>
            <span className="text-xl font-extrabold">
              <>&#43;</>
            </span>
          </button>
        </div>
      </div>
    </>
  )
}
