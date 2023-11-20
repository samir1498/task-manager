import axios from "../../../infrastructure/axios"
import { getTasks } from "./getTasks"
//DELETE
export async function handleDeleteTask(id: number | undefined) {
  if (id) {
    try {
      const response = await axios.delete(`$/${id}`, {
        withCredentials: true,
      })

      if (response.status !== 200) {
        throw new Error("Network response was not ok")
      }

      // After successfully adding the task, refetch the tasks
      getTasks()
    } catch (error) {
      console.error("Error:", error)
    }
  }
}
