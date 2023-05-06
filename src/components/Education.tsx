import styled from "styled-components"
import { EducationTemplate } from "../resume";
import Section from "./Section"
import List from "./List";
import { H3 } from "./Headings";
import HorizontalFill from "./HorizontalFill";
import { SubheadingCommaWrap } from "./CommaWrap";
import { Accent } from "./Accent";

const Italic = styled.div`
  font-style: italic;
  margin-left: 2em;
`;

export interface EducationProps {
  education: EducationTemplate[]
}

const Education = ({education}: EducationProps) => {
  return (
    <>
      <Section name="Education" id="education" gridArea="education">
        <List>
        {
          education.map(certification => {
            const certificationLocation =`${certification.institution}, ${certification.location}`;

            return (
              <li key={certification.name}>
                <H3>{certification.name}</H3>
                <HorizontalFill>
                  <SubheadingCommaWrap text={certificationLocation} />
                  <Accent>{certification.date.getFullYear()}</Accent>
                </HorizontalFill>
                <Italic>{certification.additionalInfo}</Italic>
              </li>
            );
          })
        }
        </List>
      </Section>
    </>
  );
};

export default Education;