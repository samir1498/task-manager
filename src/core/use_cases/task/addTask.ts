import axios from "../../../infrastructure/axios"
import { addTask } from "../../../state/dialogSignal"
import { TaskType } from "../../domain/task"
import { getTasks } from "./getTasks"
//CREATE
export async function handleAddTask(task: TaskType) {
  try {
    const response = await axios.post("/", {
      headers: {
        "Content-Type": "application/json",
      },
      task,
      withCredentials: true,
    })

    if (response.status !== 200) {
      throw new Error("Network response was not ok")
    }

    getTasks()
    addTask.value = false
  } catch (error) {
    console.error("Error:", error)
  }
}
