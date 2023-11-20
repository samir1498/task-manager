import { filteredTasksSignal } from "../../core/domain/task"
import Task from "./Task"

type SubTaskListProps = {
  title: string
}

export default function SubTaskList({ title }: SubTaskListProps) {
  return (
    <>
      <span>
        {title + ": "}
        {filteredTasksSignal.value.filter((t) => t.status === title).length}
      </span>
      {filteredTasksSignal.value?.map((task) => {
        return task.status === title && <Task key={task.id} task={task} />
      })}
    </>
  )
}
