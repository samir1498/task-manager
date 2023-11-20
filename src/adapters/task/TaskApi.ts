import axios from "../../infrastructure/axios"
import {
  TaskType,
  loadingSignal,
  tasksSignal,
  addTask,
  selectedTask,
} from "../../core/domain/task"

async function getTasks() {
  return axios.get("/", { withCredentials: true }).then(async (response) => {
    if (response.status !== 200) {
      return false
    }

    tasksSignal.value = await response.data
    return true
  })
}

//CREATE
async function AddTask(task: TaskType) {
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
    return true
  } catch (error) {
    console.error("Error:", error)
    return false
  }
}

async function UpdateTask(task: TaskType) {
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

  if (response.status === 200) {
    const responseMsg = await response.text()
    console.log(responseMsg)

    selectedTask.value = undefined
    getTasks()
    selectedTask.value = undefined
    return true
  }
  return false
}

async function CompleteTask(task: TaskType) {
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
  if (response.status === 200) {
    selectedTask.value = undefined
    getTasks()
    loadingSignal.value = false
    return true
  }
  return false
}

async function DeleteTask(id: number | undefined): Promise<boolean> {
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
      return true
    } catch (error) {
      console.error("Error:", error)
      return false
    }
  }
  return false
}

export default {
  getTasks,
  addTask: AddTask,
  deleteTask: DeleteTask,
  updateTask: UpdateTask,
  completeTask: CompleteTask,
}
