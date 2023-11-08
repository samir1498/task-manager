import { signal } from "@preact/signals-react"
import { TaskType } from "../types/task"

export const selectedTask = signal<TaskType | undefined>(undefined)
export const addTask = signal<boolean>(false)
