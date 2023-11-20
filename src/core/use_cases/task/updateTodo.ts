import { selectedTask } from "../../../state/dialogSignal"
import { TaskType } from "../../domain/task"
import { getTasks } from "./getTasks"

export async function handleUpdateTask(task: TaskType) {
  const id = task.id
  delete task.id
  const response = await fetch(`tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
    credentials: "include",
  })

  const responseMsg = await response.text()
  console.log(responseMsg)
  selectedTask.value = undefined

  getTasks()
}

export async function updateTask(data: TaskType) {
  handleUpdateTask(data)
  selectedTask.value = undefined
}
