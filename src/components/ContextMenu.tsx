import styled, { DefaultTheme } from "styled-components";
import Checkbox from "./Checkbox";
import { themes } from "../themes";

export interface MenuOptionsObject {
  theme : {
    get: DefaultTheme;
    set: (theme: DefaultTheme) => void
  },
  export: () => void
}

interface ContextMenuProps {
  isVisible: boolean,
  menuOptions: MenuOptionsObject
}

const Container = styled.div<{isVisible: boolean}>`
  display: ${props => props.isVisible ? "block" : "none"};
  background-color: ${props=>props.theme.contextBackgroundMenuColor};
  color: ${props => props.theme.mainColor};
  border: ${props => !props.theme.isWebLayout ? "1px black solid" : ""};
  position: fixed;
  right: 0px;
  top: 4rem;
  z-index: 1;
  min-width: 200px;
`

const Button = styled.button`
  display: block;
  color: ${props => props.theme.headerColor};
  background-color: ${props => props.theme.buttonColor};
  padding: 0.5em;
  font-size: 1em;
  border: 1px white solid;
  margin: 1em 0 1em 1em;
`;

const IsWebLayoutCheckbox = styled(Checkbox)`
  margin-top: 1em;
`;

const ContextMenu = ({isVisible, menuOptions}: ContextMenuProps) => {
  return (
    <Container id="ContextMenu" isVisible={isVisible}>
      <IsWebLayoutCheckbox id="isWebLayout" label="Web Layout" isChecked={menuOptions.theme.get.isWebLayout} onChange={(value)=>menuOptions.theme.set(value ? themes[0] : themes[1])} />
      <Button onClick={()=>menuOptions.export()}>Download as PDF</Button>
    </Container>
  );
};

export default ContextMenu;