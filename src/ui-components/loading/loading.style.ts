import styled from "styled-components";
import { spacingSize } from "../../assets/styles/globalStyles.style";

export const LoadingBackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 998;
  background-color: #000;
  top: 0;

  &.show-loading {
    visibility: visible;
    opacity: 0.5;
    transition: visibility 0s linear 0s, opacity 300ms;
  }

  &.hide-loading {
    visibility: hidden;
    opacity: 0;
    z-index: unset;
    transition: visibility 0s linear 300ms, opacity 300ms;
  }
`;

export const LoadingWrapperStyle = styled.div`
  width: 250px;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
  overflow-y: auto;
  top: 0;

  &.show-loading {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
  }
  &.hide-loading {
    visibility: hidden;
    opacity: 0;
    z-index: unset;
    transition: visibility 0s linear 300ms, opacity 300ms;
  }
`;

export const LoadingBodyStyle = styled.div`
  width: 100px;
  height: 70px;
  top: 45%;
  color: #000;
  border-radius: ${spacingSize.small}px;
  background-color: #fff;
`;

export const LoaderSpinnerStyle = styled.div`
  border: 4px solid #1b2328;
  border-top: 4px solid #33bec8;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
