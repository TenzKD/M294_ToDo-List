import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../src/components/Card";

test("renders delete button", () => {
  // ARRANGE
  render(
    <Card title="Test Task" todos={[]} dueDate="" deleteTask={() => {}} />
  );

  // ACT
  const deleteButton = screen.getByAltText(/close-button/i);

  // ASSERT
  expect(deleteButton).toBeInTheDocument();
});
