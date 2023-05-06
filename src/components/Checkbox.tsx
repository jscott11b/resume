import styled from "styled-components";

const StyledCheckbox = styled.input.attrs(() => ({
  type: "checkbox"
}))`
  margin-left: 2em;
`

const Label = styled.label`
  color: ${props=>props.theme.headerColor};
  margin-left: 0.5em;
  font-size: 1em;
`;

interface CheckboxProps {
  id: string,
  label: string,
  className?: string,
  isChecked: boolean,
  onChange: (value: boolean) => void
}

const Checkbox = ({id, label, isChecked, onChange, className}: CheckboxProps) => {
  return (
    <div className={className}>
      <StyledCheckbox id={id} checked={isChecked} onChange={(event)=>onChange(event.target.checked)}/>
      <Label htmlFor={id}>{label}</Label>
    </div>
  );
}

export default Checkbox;