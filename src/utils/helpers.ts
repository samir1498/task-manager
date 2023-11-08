import { addTask, selectedTask } from "../signals/dialogSignal"
import { filteredTasksSignal, tasksSignal } from "../signals/taskSignals"
import { TaskType } from "../types/task"

const API_URL = "http://localhost:8080/api/v1/tasks"

export async function getTasks() {
  return fetch(API_URL).then(async (response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    tasksSignal.value = await response.json()
  })
}

export async function updateTask(task: TaskType) {
  const id = task.id
  delete task.id
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  })

  const responseMsg = await response.text()
  console.log(responseMsg)
  selectedTask.value = undefined

  getTasks()
}

export async function handleAddTask(task: TaskType) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })

    if (!response.ok) {
      throw new Error("Network response was not ok")
    }

    getTasks()
    addTask.value = false
  } catch (error) {
    console.error("Error:", error)
  }
}

export async function onSubmit(data: TaskType) {
  updateTask(data)
  selectedTask.value = undefined
}

export async function handleDeleteTask(id: number | undefined) {
  if (id) {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      })

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      // After successfully adding the task, refetch the tasks
      getTasks()
    } catch (error) {
      console.error("Error:", error)
    }
  }
}

type TaskProperty =
  | "id"
  | "title"
  | "description"
  | "dueDate"
  | "priority"
  | "status"

export function handleFilterTasks(e: React.ChangeEvent<HTMLInputElement>) {
  const query = e.target.value
  filteredTasksSignal.value = tasksSignal.value?.filter((task) => {
    const queryLower = query.toLowerCase()
    for (const key in task) {
      const taskKey = key as TaskProperty
      if (task[taskKey]?.toString().toLowerCase().includes(queryLower)) {
        return true
      }
    }
    return false
  })
}
