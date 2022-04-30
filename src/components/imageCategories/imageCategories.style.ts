import styled from "styled-components";
import { spacingSize } from "assets/styles/globalStyles.style";

export const ImageCategoriesWrapperStyle = styled.nav`
  padding: ${spacingSize.medium}px;
  text-align: center;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
      padding-top: ${spacingSize.small}px;
      cursor: pointer;

      &:hover {
      }
    }
  }
`;
