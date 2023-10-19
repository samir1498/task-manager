// TaskForm.tsx

import React, { useRef, useState } from "react";
import { Task } from "../types/task";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState<Task>({
    id: 0, // You can set the ID dynamically or use a unique key generator
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    status: "Open", // Assuming the initial status is "Open"
  });

  const dialog = useRef({} as HTMLDialogElement);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask({
      id: newTask.id + 1,
      title: "",
      description: "",
      dueDate: "",
      priority: "",
      status: "Open",
    });
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          className="self-center bg-green-500 p-2 text-white"
          onClick={() => {
            dialog.current.show();
          }}
        >
          +
        </button>
        <dialog ref={dialog}>
          <h2 className="w-full p-4 text-center text-3xl font-bold">
            Add New Task
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center rounded-lg border border-black p-4 relative"
          >
            <button
              className="self-center bg-red-500 p-2 text-white ml-1 rounded absolute top-0 right-0"
              onClick={() => {
                dialog.current.close();
              }}
            >
              X
            </button>
            <label htmlFor="title" className="m-1 font-bold">
              Title:
            </label>
            <input
              type="text"
              name="title"
              className="m-2 rounded-lg border border-solid border-black"
              value={newTask.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              name="description"
              className="w-full resize-none rounded-lg border border-solid border-black"
              value={newTask.description}
              onChange={handleChange}
            />

            <label htmlFor="dueDate">Due Date:</label>
            <input
              type="date"
              name="dueDate"
              value={newTask.dueDate}
              onChange={handleChange}
            />

            <label htmlFor="priority">Priority:</label>
            <select
              name="priority"
              value={newTask.priority}
              onChange={handleChange}
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <button type="submit">Add Task</button>
          </form>
        </dialog>
      </div>
    </>
  );
};

export default TaskForm;
