import { effect, signal } from "@preact/signals-react"
import { TaskType } from "../core/domain/task"

export const tasksSignal = signal<TaskType[]>([])
export const filteredTasksSignal = signal<TaskType[]>([])

effect(() => {
  filteredTasksSignal.value = tasksSignal.value
})

export const loadingSignal = signal(false)
