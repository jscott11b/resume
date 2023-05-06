import {render, screen, within} from "@testing-library/react"
import { EmploymentTemplate } from "../resume";
import Employment from "./Employment";

const MonthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const mockData: EmploymentTemplate[] = [
  {
    employer: "Compu-Global-Hyper-Mega-Net",
    location: "Springfield USA",
    title: "Junior Vice President",
    startDate: new Date(1995, 3),
    endDate: new Date(1997, 8),
    details: [
      "assisting customers find the right products",
      "negotiating company buyouts",
      "this industry moves so fast it's really hard to tell", 
    ]
  },
  {
    employer: "Dunder Mifflin",
    location: "Scranton PA",
    title: "Salesman",
    startDate: new Date(2005, 0),
    endDate: new Date(2007, 12),
    details: [
      "Assistant Regional Manager",
      "multiple Paper Salesman of the Year"]
  }
];

describe("Education Component", () => {
  test("renders heading successfully", () => {
    render(<Employment employments={mockData} />);
    
    const heading = screen.getByText("Employment Experience");
    expect(heading).toBeInTheDocument();
  });

  test("renders certification list", () => {
    render(<Employment employments={mockData} />);
    
    const listItems = screen.getAllByRole("listitem").filter(listItem => listItem.children.length > 1);
    
    const expectLength = mockData.length;
    expect(listItems).toHaveLength(expectLength);

    for(let index = 0; index < expectLength; index++) {
      const item = listItems[index];
      const { getByText } = within(item);

      getByText(`${mockData[index].title}`);
      getByText(`${mockData[index].employer},`);
      getByText(mockData[index].location);

      const formattedStartDate = `${MonthShortNames[mockData[index].startDate.getMonth()]} ${mockData[index].startDate.getFullYear()}`;
      const formattedEndDate = `${MonthShortNames[mockData[index].endDate.getMonth()]} ${mockData[index].endDate.getFullYear()}`;
      getByText(`${formattedStartDate} - ${formattedEndDate}`);

      for(const detail of mockData[index].details) {
        getByText(detail);
      }
    }
  });
});