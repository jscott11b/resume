import styled from "styled-components"
import { EmploymentTemplate } from "../resume"
import { formatDateMonthYear } from "../utility"
import Section from "./Section"
import List from "./List"
import { H3 } from "./Headings"
import { SubheadingCommaWrap } from "./CommaWrap"
import HorizontalFill from "./HorizontalFill"
import { Accent } from "./Accent"

const Details = styled(List)`
  margin-top: 0.5em;
  margin-left: 3em;
  margin-bottom: 0.5em;
`;

export interface EmploymentProps {
  employments: EmploymentTemplate[]
}

const Employment = ({employments}: EmploymentProps) => {
  return (
      <Section name="Employment Experience" id="employment" gridArea="employment">
        <List>
        {
          employments.map(employment => {
            const jobLocation = `${employment.employer}, ${employment.location}`;
            
            return (
              <li key={employment.employer}>
                <H3>{employment.title}</H3>
                <HorizontalFill>
                  <SubheadingCommaWrap text={jobLocation} />
                  <Accent>{`${formatDateMonthYear(employment.startDate)} - ${formatDateMonthYear(employment.endDate)}`}</Accent>
                </HorizontalFill>
                <Details listStyle="outside">
                  {
                    employment.details.map(detail => <li key={detail}>{detail}</li>)
                  }
                </Details>
              </li>
            );
          })
        }
        </List>
      </Section>
  );
};

export default Employment;