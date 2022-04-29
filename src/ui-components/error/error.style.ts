import styled from "styled-components";

export const ErrorBackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  top: 0;
  right: -100%;
  opacity: 0.7;
  z-index: 1;

  &.show-error {
    visibility: visible;
    right: unset;
    transition: all 600ms;
  }

  &.hide-error {
    visibility: hidden;
    z-index: unset;
    transition: visibility 0s linear 300ms, opacity 600ms;
  }
`;

export const ErrorWrapperStyle = styled.div`
  position: fixed !important;
  display: grid;
  top: 35vh;
  min-width: 200px;
  width: auto;
  z-index: 2;
  padding: 20px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #fff;
  justify-items: center;
  right: -100%;

  &.show-error {
    visibility: visible;
    right: unset;
    transition: all 600ms;
  }

  &.hide-error {
    visibility: hidden;
    z-index: unset;
    transition: visibility 0s linear 300ms, opacity 600ms;
  }
`;

export const ErrorMessageTextStyle = styled.div``;

export const ErrorRetryButton = styled.button`
  width: max-content;
  margin-top: 2ch;
  padding: 0.5ch 2ch;
  background-color: #fff;
  border: 1px solid #a6acbe;
  border-radius: 10px;
  cursor: pointer;
`;
