import React from "react";
import { render, screen } from "@testing-library/react";
import Card from "../src/components/Card";

test("check if edit button renders", () => {
  // ARRANGE
  render(
    <Card title="Test Task" todos={[]} dueDate="" deleteTask={() => {}} />
  );

  // ACT
  const editButton = screen.getByAltText(/edit-button/i);

  // ASSERT
  expect(editButton).toBeInTheDocument();
});
