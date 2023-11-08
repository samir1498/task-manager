import { useEffect } from "react"
import Navbar from "./NavBar"
import Task from "./Task"
import { filteredTasksSignal } from "./../signals/taskSignals"
import {
  getTasks,
  handleAddTask,
  handleFilterTasks,
  onSubmit,
} from "../utils/helpers"
import { addTask, selectedTask } from "../signals/dialogSignal"
import TaskDialog from "./TaskDialog"

function TasksList() {
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <Navbar />
      {selectedTask.value && <TaskDialog onSubmit={onSubmit} />}
      {addTask.value && <TaskDialog onSubmit={handleAddTask} />}
      <div className="flex min-h-screen flex-col items-center justify-start overflow-auto">
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
              <span className=" font-bold">Add New Task</span>
              <span className="text-xl font-extrabold">
                <>&#43;</>
              </span>
            </button>
          </div>
        </div>
        {/* <TaskForm onAddTask={handleAddTask} /> */}
        {filteredTasksSignal.value?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  )
}

export default TasksList
