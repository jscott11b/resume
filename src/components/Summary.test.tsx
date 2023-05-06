import { render, screen } from "@testing-library/react";
import Summary from "./Summary";

const EXPECTED_TEXT = "Great worker. More Summary. Want Job.";

jest.mock("../resume", () => {
  return {
    summary: EXPECTED_TEXT
  };
});

describe("Summary Component", () => {
  test("renders resume summary", () => {
    render(<Summary />);

    const heading = screen.getByRole("heading");
    expect(heading.innerHTML).toBe("Summary");
  
    expect(screen.getByText(EXPECTED_TEXT)).toBeInTheDocument();
  });
});