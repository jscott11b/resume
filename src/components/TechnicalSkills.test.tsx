import { render, screen } from "@testing-library/react";
import TechnicalSkills from "./TechnicalSkills";

const mockData = ["code", "software", "infrastructure"]

describe("TechnicalSkills Component", () => {
  test("should render heading", () => {
    render(<TechnicalSkills technicalSkills={mockData}/>);

    expect(screen.getByText("Technical Skills")).toBeInTheDocument();
  });

  test("should render skill list", () => {
    render(<TechnicalSkills technicalSkills={mockData}/>);

    for(const skill of mockData) {
      expect(screen.getByText(skill)).toBeInTheDocument();
    }
  });
});