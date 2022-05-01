import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const ImageBackgroundStyle = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 997;
  background-color: #000;
  top: -100%;

  &.show-image-preview {
    top: 0;
    visibility: visible;
    opacity: 0.5;
    transition: visibility 0s linear 0s, opacity 300ms;
  }

  &.hide-image-preview {
    visibility: hidden;
    opacity: 0;
    z-index: unset;
    transition: visibility 0s linear 300ms, opacity 300ms;
  }
`;

export const ImagePreviewBodyStyle = styled.div`
  width: 100vw;
  height: 100vh;
  top: -100%;
  z-index: 998;

  &.show-image-preview {
    top: -50%;
    transform: translate(-50%, 50%);
    visibility: visible;
    opacity: 1;
    transition: visibility 0s linear 0s, opacity 300ms;
  }
  &.hide-image-preview {
    visibility: hidden;
    opacity: 0;
    z-index: unset;
    transition: visibility 0s linear 300ms, opacity 300ms;
  }
`;

export const ImagePreviewStyle = styled.img`
  max-width: 500px;
  overflow: hidden;
  overflow-y: auto;
`;

export const ImagePreviewCloseStyle = styled.img`
  position: absolute;
  right: ${spacingSize.large}px;
  top: ${spacingSize.medium}px;
  z-index: 999;
  cursor: pointer;
`;
