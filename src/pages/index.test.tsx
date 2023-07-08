import { expect, it } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./index";

it("renders properly", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", { name: "Create T3 App" });
  expect(heading).toBeDefined();
});
