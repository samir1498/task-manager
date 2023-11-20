import axios from "../../../infrastructure/axios"
import { selectedTask } from "../../../state/dialogSignal"
import { loadingSignal } from "../../../state/taskSignals"
import { TaskType } from "../../domain/task"
import { getTasks } from "./getTasks"

export async function handleCompleteTask(task: TaskType) {
  loadingSignal.value = true
  const id = task.id
  delete task.id
  const response = await axios.put(
    `tasks/complete/${id}`,
    {},
    {
      withCredentials: true,
    },
  )

  const responseMsg = await response.data
  console.log(responseMsg)
  selectedTask.value = undefined

  getTasks()
  loadingSignal.value = false
}
