import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const CatImagesListBoxStyle = styled.div`
  display: grid;
`;

export const CatImagesListWrapperStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CatImagesListLoadMoreStyle = styled.button`
  height: ${spacingSize.large}px;
  border: none;
  margin-top: ${spacingSize.medium}px;
  margin-bottom: ${spacingSize.medium}px;
  box-shadow: 0 0 10px 0 #0000001a;
  background-color: transparent;
  border-radius: ${spacingSize.small}px;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 40%;
    position: fixed;
    bottom: ${spacingSize.normal}px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
