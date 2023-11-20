import { signal } from "@preact/signals-react"
import { TaskType } from "../core/domain/task"

export const selectedTask = signal<TaskType | undefined>(undefined)
export const addTask = signal<boolean>(false)
