import React from "react";
import ImageCategoriesSidebar from "components/imageCategories/ImageCategories";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";
import {
  ContainerMainContentStyle,
  ContainerSidebarStyle,
  ContainerStyle,
} from "./container.style";
import Error from "../error/Error";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const {
    children,
    loading = false,
    hasError = false,
    errorMessage,
    errorRetryFunction,
    className = "",
    style,
    onClick,
  } = props;

  const isMobile = window.outerWidth <= 480;

  return (
    <ContainerStyle
      className={`${className} ${!isMobile ? "with-sidebar" : "not-sidebar"}`}
      onClick={onClick}
      style={style}
    >
      <Loading loading={loading} />

      <Error
        fetchDataFunction={errorRetryFunction}
        hasError={hasError}
        errorMessage={errorMessage}
      />

      <ContainerSidebarStyle>
        <ImageCategoriesSidebar />
      </ContainerSidebarStyle>

      <ContainerMainContentStyle>{children}</ContainerMainContentStyle>
    </ContainerStyle>
  );
};

export default Container;
