import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const ContainerStyle = styled.div`
  padding-left: ${spacingSize.medium}px;
  padding-right: ${spacingSize.medium}px;
  display: flex;
  max-width: 960px;
  font-family: sans-serif;
  line-height: 1.5;
  margin: 15vh auto auto;

  &.with-sidebar {
    display: flex;
    flex-wrap: wrap;
  }

  &.not-sidebar {
    flex-basis: 0;
    flex-grow: 999;
  }
`;

export const ContainerMainContentStyle = styled.div`
  flex: 6;
`;

export const ContainerSidebarStyle = styled.div`
  flex: 1;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: 5px;
`;
