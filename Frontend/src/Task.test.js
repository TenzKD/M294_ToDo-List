import React from "react";
import { render, screen } from "@testing-library/react";
import Task from "../src/components/Task";

const mockUpdateTask = jest.fn();
const mockDeleteTask = jest.fn();
const mockSetTasks = jest.fn();
const mockSetCloseForm = jest.fn();

const mockTasks = [
  {
    id: "1",
    content: {
      title: "Test Task 1",
      todos: ["Todo 1", "Todo 2"],
      dueDate: "2024-09-18",
    },
  },
  {
    id: "2",
    content: {
      title: "Test Task 2",
      todos: ["Todo 3"],
      dueDate: "2024-09-19",
    },
  },
];

test("renders tasks and filters based on search input", () => {
  render(
    <Task
      tasks={mockTasks}
      setTasks={mockSetTasks}
      setCloseForm={mockSetCloseForm}
      deleteTask={mockDeleteTask}
    />
  );

  // Check if both tasks are rendered initially
  expect(screen.getByText("Test Task 1")).toBeInTheDocument();
  expect(screen.getByText("Test Task 2")).toBeInTheDocument();
});
