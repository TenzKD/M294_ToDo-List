import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Impressum from "../src/pages/Impressum";
import Layout from "../src/pages/Layout";

test('renders Impressum component for "/impressum" route', () => {
  // ARRANGE
  render(
    <MemoryRouter initialEntries={["/impressum"]}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="impressum" element={<Impressum />} />
        </Route>
      </Routes>
    </MemoryRouter>
  );

  // ACT

  // ASSERT
  expect(
    screen.getByRole("heading", { name: "Impressum" }) // Da der name Impressum zweimal vorkommt einmal in der sidebar nav und im h1 mithilfe getByRole Problem behoben
  ).toBeInTheDocument();
});
