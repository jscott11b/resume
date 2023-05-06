import {render, screen, within} from "@testing-library/react"
import Education from "./Education";
import { EducationTemplate } from "../resume";

const mockData: EducationTemplate[] = [
  {
    name: "Qualified Wizard",
    date: new Date(2010,5),
    institution: "Hogwarts School of Witchcraft and Wizardry",
    location: "Scotland",
    additionalInfo: "Prefect"
  },
  {
    name: "Bachelor of Arts",
    date: new Date(2007,6),
    institution: "Greendale Community College",
    location: "Greendale CO",
    additionalInfo: "Paintball Champion 2006"
  }
];

describe("Education Component", () => {
  test("renders heading successfully", () => {
    render(<Education education={mockData} />);
    
    const heading = screen.getByText("Education");
    expect(heading).toBeInTheDocument();
  });

  test("renders certification list", () => {
    render(<Education education={mockData} />);
    
    const listItems = screen.getAllByRole("listitem");
    
    const expectLength = mockData.length;
    expect(listItems).toHaveLength(expectLength);

    for(let index = 0; index < expectLength; index++) {
      const item = listItems[index];
      const { getByText } = within(item);

      getByText(mockData[index].name);
      getByText(`${mockData[index].institution},`);
      getByText(mockData[index].location);
      getByText(`${mockData[index].date.getFullYear()}`);
      getByText(mockData[index].additionalInfo);
    }
  });
});