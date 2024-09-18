import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "./components/Card"; // Adjust the path as needed

test("should render Card component with correct title and date", () => {
  // ARRANGE
  const mockDeleteTask = jest.fn();
  const props = {
    id: 1,
    title: "Test Task",
    todos: ["Todo 1"],
    dueDate: "2023-09-01",
    deleteTask: mockDeleteTask,
  };

  render(<Card {...props} />);

  // ASSERT
  const titleElement = screen.getByText(/Test Task/i);
  const dueDateElement = screen.getByText(/2023-09-01/i);

  expect(titleElement).toBeInTheDocument();
  expect(dueDateElement).toBeInTheDocument();
});
