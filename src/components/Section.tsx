import { PropsWithChildren } from "react"
import styled from "styled-components";
import { H2 } from "./Headings";

interface SectionProps {
  name: string,
  id: string,
  gridArea: string
}

const Container = styled.section<SectionProps>`
  grid-area: ${props => props.gridArea};
`;

const Section = ({name, id, gridArea, children}: PropsWithChildren<SectionProps>) => {
  return (
  <>
    <Container name={name} id={id} gridArea={gridArea}>
      <H2>{name}</H2>
      {children}
    </Container>
  </>
  )
};

export default Section;