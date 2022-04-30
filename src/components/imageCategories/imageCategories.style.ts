import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const ImageCategoriesWrapperStyle = styled.nav`
  padding: ${spacingSize.medium}px;
  text-align: center;
  box-shadow: 0 0 10px 0 #0000001a;
  border-radius: ${spacingSize.normal}px;

  @media (max-width: 576px) {
    margin-top: ${spacingSize.medium}px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      margin: ${spacingSize.small}px;
      cursor: pointer;
      padding: ${spacingSize.small}px ${spacingSize.medium}px;

      &.active-category {
        box-shadow: 0 0 10px 0 #0000001a;
        border-radius: ${spacingSize.small}px;
      }
    }
  }
`;
