import { useEffect } from "react"
import Navbar from "../ui/common/NavBar"
import Task from "../ui/task/Task"
import { filteredTasksSignal } from "../state/taskSignals"
import { getTasks, handleAddTask, updateTask } from "../utils/taskCRUD"
import { addTask, selectedTask } from "../state/dialogSignal"
import TaskDialog from "../ui/task/TaskDialog"
import TaskListHeader from "../ui/task/TaskListHeader"

function TasksList() {
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />
      {selectedTask.value && <TaskDialog onSubmit={updateTask} />}
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
