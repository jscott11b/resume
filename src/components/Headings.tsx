import styled from "styled-components";

const H1 = styled.h1`
  width: 100%;
  color: ${props => props.theme.headerColor};
  background-color: ${props => props.theme.headerBackgroundColor};
  text-align: ${props=>props.theme.nameTextAlign};
  padding-left: ${props=>props.theme.isWebLayout ? "0" : "1rem"};
  line-height: 2em;
  font-size: 2rem;
  margin: 0;
`;

const H2 = styled.h2`
  color: ${props=>props.theme.sectionHeadingColor};
  margin-bottom: 0.5em;
`;

const H3 = styled.h3`
  margin-left: 1em;
  display: inline-block;
`;

export { H1, H2, H3 };
