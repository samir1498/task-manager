import axios from "../../infrastructure/axios"
import {
  TaskType,
  loadingSignal,
  tasksSignal,
  addTask,
  selectedTask,
} from "../../core/domain/task"

async function getTasks() {
  tasksSignal.value = []
  loadingSignal.value = true
  return axios
    .get("/tasks", { withCredentials: true })
    .then(async (response) => {
      if (response.status !== 200) {
        return false
      }

      tasksSignal.value = await response.data
      loadingSignal.value = false
      return true
    })
}

//CREATE
async function AddTask(task: TaskType) {
  try {
    const response = await axios.post(
      "/tasks",
      {
        ...task,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    )

    if (response.status !== 200) {
      return false
    } else if (response.status === 200) {
      getTasks()
      addTask.value = false
      return true
    }
    return response.status === 200
  } catch (error) {
    console.error("Error:", error)
    return false
  }
}

async function UpdateTask(task: TaskType) {
  const id = task.id
  delete task.id
  const response = await axios.put(
    `tasks/${id}`,
    { ...task },
    {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    },
  )

  if (response.status === 200) {
    const responseMsg = await response.data
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
      const response = await axios.delete(`tasks/${id}`, {
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
