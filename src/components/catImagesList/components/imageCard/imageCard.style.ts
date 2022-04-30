import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const ImageCardWrapperStyle = styled.div`
  padding: ${spacingSize.small}px;
  transition: 600ms;
  display: flex;
  height: max-content;
  cursor: pointer;

  &:hover {
    transform: scale(1.3) rotate(-2deg);
    transition: 600ms;
  }
`;

export const ImageCardStyle = styled.img`
  display: block;
  max-width: 100px;
  width: auto;
  height: auto;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: 10px;
`;
