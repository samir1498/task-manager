import { useEffect } from "react"
import Navbar from "../common/NavBar"
import Task from "./Task"
import TaskDialog from "./TaskDialog"
import TaskListHeader from "./TaskListHeader"
import { getTasks } from "../../core/use_cases/getTasks"
import { handleUpdateTask } from "../../core/use_cases/updateTodo"
import { addTask, selectedTask } from "../../infrastructure/state/dialogSignal"
import { handleAddTask } from "../../core/use_cases/addTask"
import { filteredTasksSignal } from "../../infrastructure/state/taskSignals"

function TasksList() {
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      {selectedTask.value && <TaskDialog onSubmit={handleUpdateTask} />}
      {addTask.value && <TaskDialog onSubmit={handleAddTask} />}
      <div className="flex h-full flex-col items-center justify-start overflow-hidden overflow-y-auto border">
        <TaskListHeader />
        <span>
          In progress:{" "}
          {
            filteredTasksSignal.value.filter((t) => t.status !== "Completed")
              .length
          }
        </span>
        {filteredTasksSignal.value?.map((task) => {
          return (
            task.status !== "Completed" && <Task key={task.id} task={task} />
          )
        })}

        <span>
          Completed:{" "}
          {
            filteredTasksSignal.value.filter((t) => t.status === "Completed")
              .length
          }
        </span>
        {filteredTasksSignal.value?.map((task) => {
          return (
            task.status === "Completed" && <Task key={task.id} task={task} />
          )
        })}
      </div>
    </div>
  )
}

export default TasksList
