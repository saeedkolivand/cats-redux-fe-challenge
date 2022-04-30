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

  @media (max-width: 576px) {
    margin: ${spacingSize.medium}px auto;
  }
`;

export const ContainerMainContentStyle = styled.div`
  flex: 6;
  margin-left: ${spacingSize.medium}px;

  @media (max-width: 576px) {
    margin-left: unset;
  }
`;

export const OpenSidebarButtonStyle = styled.div`
  position: absolute;
  top: ${spacingSize.normal}px;
  left: ${spacingSize.normal}px;

  @media (min-width: 577px) {
    display: none;
    position: unset;
  }
`;

export const CloseSidebarButtonStyle = styled.div`
  position: absolute;
  top: ${spacingSize.small}px;
  left: ${spacingSize.small}px;

  @media (min-width: 577px) {
    display: none;
    position: unset;
  }
`;

export const ContainerSidebarBackgroundStyle = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 997;
  background-color: #000;
  top: 0;
  left: -100%;

  &.mobile-sidebar-open {
    visibility: visible;
    left: 0;
    opacity: 0.5;
    transition: all 300ms;
  }
  &.mobile-sidebar-close {
    visibility: hidden;
    opacity: 0;
    transition: all 300ms;
  }
`;

export const ContainerSidebarStyle = styled.div`
  flex: 1;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: ${spacingSize.small}px;
  
    @media (max-width: 576px) {
      position: absolute;
      left: -100%;
      top: 0;
      background-color: #fff;
      width: 250px;
      height: 100vh;
      z-index: 998;
      overflow: hidden;
      overflow-y: auto;
      border-radius: unset;

      img {
        position: absolute;
        top: 0;
        left: 24ch;
        z-index: 999;
        margin-top: ${spacingSize.small}px;
        width: ${spacingSize.normal}px;
      }

      &.mobile-sidebar-open {
        visibility: visible;
        left: 0;
        opacity: 1;
        transition: all 300ms;
      }
      &.mobile-sidebar-close {
        visibility: hidden;
        opacity: 0;
        z-index: unset;
        transition: all 300ms;
      }
    }
  }
`;
