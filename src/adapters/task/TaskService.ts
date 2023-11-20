import { TaskType, taskSucces } from "../../core/domain/task"
import TaskApi from "./TaskApi"

async function add(task: TaskType): Promise<void> {
  const success = await TaskApi.addTask(task)
  taskSucces.value = success
}

async function get(): Promise<void> {
  const success = await TaskApi.getTasks()
  taskSucces.value = success
}

async function update(task: TaskType): Promise<void> {
  const success = await TaskApi.updateTask(task)
  taskSucces.value = success
}

async function deleteTask(taskId: number): Promise<void> {
  const success = await TaskApi.deleteTask(taskId)
  taskSucces.value = success
}

async function complete(task: TaskType): Promise<void> {
  const success = await TaskApi.completeTask(task)
  taskSucces.value = success
}

export default { add, get, update, delete: deleteTask, complete }
