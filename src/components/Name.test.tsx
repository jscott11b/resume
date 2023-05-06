import { render, screen } from "@testing-library/react";
import Name from "./Name";

const EXPECTED_NAME = "Pepper Potts";

jest.mock("../resume", () => {
  return {
    name: EXPECTED_NAME
  }
});

describe("Name component", () => {
  test("renders resume name", () => {
    render(<Name />);
    const heading = screen.getByRole("heading");
    expect(heading.innerHTML).toBe(EXPECTED_NAME);
  });
});