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
  let textLines = text.split(", ");

  if(textLines.length > 1) {
    textLines = textLines.map<string>((value, index) => { 
      if( index < textLines.length - 1) {
        return value + ", ";
      }
      return value;
    });
  }
                                  
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
