import { effect, signal } from "@preact/signals-react"
import { TaskType } from "../types/task"

export const tasksSignal = signal<TaskType[]>([])
export const filteredTasksSignal = signal<TaskType[]>([])

effect(() => {
  filteredTasksSignal.value = tasksSignal.value
})
