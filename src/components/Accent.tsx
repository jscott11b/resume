import styled from "styled-components";

const Accent = styled.div`
  font-style: italic;
  color: ${props=>props.theme.dateColor};
  min-width: fit-content;
  margin-left: 1em;
`;

export { Accent };