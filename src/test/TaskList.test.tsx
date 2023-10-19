import { render, screen } from "@testing-library/react";
import TasksList from "../components/TasksList";

const mockTasks = [
  {
    id: 1,
    title: "Sample Task 1",
    description: "This is a sample task 1 description.",
    dueDate: "2023-12-31",
    priority: "High",
    status: "In Progress",
  },

  {
    id: 2,
    title: "Sample Task 2",
    description: "This is a sample task 2 description.",
    dueDate: "2023-12-30",
    priority: "Low",
    status: "In Progress",
  },
];

describe("#renders the TaskList component with task details", () => {
  it("renders task 1", () => {
    render(<TasksList tasks={mockTasks} />);
    // Check if the component renders the task details
    const titleElement = screen.getByText(/Sample Task 1/i, { selector: "h3" });
    const descriptionElement = screen.getByText(
      /This is a sample task 1 description/i,
    );
    const dueDateElement = screen.getByText(/Due Date: 2023-12-31/i);
    const priorityElement = screen.getByText(/Priority: High/i);
    const statusElement = screen.getAllByText(/Status: In Progress/i)[0];

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dueDateElement).toBeInTheDocument();
    expect(priorityElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
  });

  it("renders task 2", () => {
    render(<TasksList tasks={mockTasks} />);
    // Check if the component renders the task details
    const titleElement = screen.getByText(/Sample Task 2/i, { selector: "h3" });
    const descriptionElement = screen.getByText(
      /This is a sample task 2 description/i,
    );
    const dueDateElement = screen.getByText(/Due Date: 2023-12-31/i);
    const priorityElement = screen.getByText(/Priority: High/i);
    const statusElement = screen.getAllByText(/Status: In Progress/i)[1];

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dueDateElement).toBeInTheDocument();
    expect(priorityElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
  });

});
