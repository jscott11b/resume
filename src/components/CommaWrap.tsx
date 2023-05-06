import styled from "styled-components";

const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const PreserveWhitespace = styled.span`
  white-space: pre;
`;

interface CommaWrapProps {
  text: string,
  className?: string
}

const CommaWrap = ({text, className}: CommaWrapProps) => {
  const textLines = text.split(/(?<=, )/g);

  return (
    <FlexWrap className={className}>
    {
      textLines.map(line => <PreserveWhitespace key={line}>{line}</PreserveWhitespace>)
    }
    </FlexWrap>
  );
};

const SubheadingCommaWrap = styled(CommaWrap)`
  margin-left: 2em;
  font-weight: bold;
  color: ${props=>props.theme.locationColor};
`;

export { CommaWrap, SubheadingCommaWrap };