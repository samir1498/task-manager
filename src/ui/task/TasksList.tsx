import { useEffect } from "react"
import Navbar from "../common/NavBar"
import TaskDialog from "./TaskDialog"
import TaskListHeader from "./TaskListHeader"
import {
  addTask,
  filteredTasksSignal,
  loadingSignal,
  selectedTask,
} from "../../core/domain/task"
import TaskService from "../../adapters/task/TaskService"
import SubTaskList from "./SubTaskList"

function TasksList() {
  useEffect(() => {
    TaskService.get()
  }, [])

  const showInProgress =
    filteredTasksSignal.value.filter((t) => t.status === "In Progress")
      .length !== 0
  const showCompleted =
    filteredTasksSignal.value.filter((t) => t.status === "Completed").length !==
    0

  return (
    <div className="flex flex-col overflow-hidden">
      <Navbar />

      {selectedTask.value && <TaskDialog onSubmit={TaskService.update} />}
      {addTask.value && <TaskDialog onSubmit={TaskService.add} />}

      <div className="flex h-full flex-col items-center justify-start overflow-hidden overflow-y-auto">
        <TaskListHeader />
        {/* show In progress tasks */}
        {showInProgress && <SubTaskList title="In Progress" />}
        {/* show Completed task */}
        {showCompleted && <SubTaskList title="Completed" />}

        {!showCompleted && !showInProgress && !loadingSignal.value && (
          <span className="pt-4 text-lg">You don't have any tasks yet.</span>
        )}
        {loadingSignal.value && <span>spinner</span>}
      </div>
    </div>
  )
}

export default TasksList
