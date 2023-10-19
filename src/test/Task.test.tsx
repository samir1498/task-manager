import { render, screen } from '@testing-library/react';
import Task from '../components/Task';

// Define a mock task for testing
const mockTask = {
  id: 1,
  title: 'Sample Task',
  description: 'This is a sample task description.',
  dueDate: '2023-12-31',
  priority: 'High',
  status: 'In Progress',
};


it('renders the Task component with task details', () => {
    render(<Task task={mockTask} />);
  
    // Check if the component renders the task details
    const titleElement = screen.getByText(/Sample Task/i, {selector: 'h3'});
    const descriptionElement = screen.getByText(/This is a sample task description/i);
    const dueDateElement = screen.getByText(/Due Date: 2023-12-31/i);
    const priorityElement = screen.getByText(/Priority: High/i);
    const statusElement = screen.getByText(/Status: In Progress/i);
  
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(dueDateElement).toBeInTheDocument();
    expect(priorityElement).toBeInTheDocument();
    expect(statusElement).toBeInTheDocument();
  });

  