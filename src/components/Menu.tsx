import { useState } from "react";
import styled from "styled-components";
import ContextMenu, { MenuOptionsObject } from "./ContextMenu";
import { useClickEvent } from "../hooks";

const Button = styled.button`
    position: fixed;
    top: 0;
    right: 0;
    margin-left: 0;
    width: 4rem;
    height: 4rem;
    border: none;
    padding: 0.5rem;
    background-color: rgba(0,0,0,0);
    display: inline-block;
`;

const Line = styled.div`
  background-color: ${props=>props.theme.headerColor};
  height: 0.25rem;
  margin: 0.5rem;
`;

export interface MenuOptionsProps {
  menuOptions: MenuOptionsObject
}

const Menu = ({menuOptions}:MenuOptionsProps) => {
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  
  const onDocumentClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    
    if(setIsContextMenuVisible && !target.closest("#ContextMenu")) {
      setIsContextMenuVisible(false);
    }
    event.stopPropagation();
  };

  useClickEvent(onDocumentClick);

  return (
    <>
      <Button className="menuButton" onClick={(event) => {
        setIsContextMenuVisible(value => !value);
        event.stopPropagation();
      }}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Button>
      <ContextMenu isVisible={isContextMenuVisible} menuOptions={menuOptions}/>
    </>
  );
};

export default Menu;