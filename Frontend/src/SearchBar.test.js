import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from "../src/components/Task";

describe('Task Component', () => {
  const mockTasks = [
    { id: 1, content: { title: 'Task 1', todos: ['Todo 1', 'Todo 2'] } },
    { id: 2, content: { title: 'Task 2', todos: ['Todo 3', 'Todo 4'] } },
  ];

  test('renders search bar and filters tasks', () => {
    render(<Task tasks={mockTasks} />);

    // Check if search bar is rendered
    const searchInput = screen.getByPlaceholderText('search');
    expect(searchInput).toBeInTheDocument();

    // Check if all tasks are initially rendered
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    // Simulate search for 'Task 1'
    fireEvent.change(searchInput, { target: { value: 'Task 1' } });

    // Check if only 'Task 1' is visible
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument();

    // Simulate search for a todo item
    fireEvent.change(searchInput, { target: { value: 'Todo 3' } });

    // Check if only 'Task 2' is visible
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    // Clear search
    fireEvent.change(searchInput, { target: { value: '' } });

    // Check if all tasks are visible again
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });
});

