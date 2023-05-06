import styled from "styled-components";
import Section from "./Section";

const Details = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Skill = styled.li`
  list-style-type: none;
  background-color: ${props=>props.theme.techBackgroundColor};
  color: ${props=>props.theme.techColor};
  padding: ${props=>props.theme.isWebLayout ? "0.5em" : "0"};
  margin: 0.1em;
  border-radius: 1em;

  ${props => !props.theme.isWebLayout ? "&:after { content: \", \";} &:last-child:after { content: \"\"; }" : ""}
`;

export interface TechnicalSkillsProps {
  technicalSkills: string[]
}

const TechnicalSkills = ({technicalSkills}: TechnicalSkillsProps) => {
  return (
    <>
      <Section name="Technical Skills" id="skills" gridArea="skills">
        <Details>
          {
            technicalSkills.map(skill => <Skill key={skill}>{skill}</Skill>)
          }
        </Details>
      </Section>
    </>
  );
}

export default TechnicalSkills;