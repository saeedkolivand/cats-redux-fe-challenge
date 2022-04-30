import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const CatImagesListWrapperStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CatImagesListLoadMoreStyle = styled.button`
  height: ${spacingSize.large}px;
  border: none;
  margin-top: ${spacingSize.medium}px;
  box-shadow: 0 0 10px 0 #0000001a;
  background-color: transparent;
`;
