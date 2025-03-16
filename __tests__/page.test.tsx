import Page from "../app/page";
import { render, screen } from "@testing-library/react";

it("renders a heading", () => {
  render(<Page />);

  const heading = screen.getByRole("heading", { level: 1 });

  expect(heading).toBeInTheDocument();
});

test("true is true", () => {
  expect(true).toBe(true);
});
