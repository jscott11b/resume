import styled from "styled-components";
import * as CSS from 'csstype';

export interface ListProps {
  listStyle?: CSS.Property.ListStyle
}

const List = styled.ul<ListProps>`
  list-style: ${props => props.listStyle ?? "none"}
`;

export default List;