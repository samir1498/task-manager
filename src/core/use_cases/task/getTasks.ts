import axios from "../../../infrastructure/axios"
import { tasksSignal } from "../../../state/taskSignals"

export async function getTasks() {
  return axios.get("/", { withCredentials: true }).then(async (response) => {
    if (response.status !== 200) {
      return false
    }

    tasksSignal.value = await response.data
    console.log("tasks", tasksSignal.value)
    return true
  })
}
