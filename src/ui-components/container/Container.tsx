import React, { useState } from "react";
import ImageCategoriesSidebar from "components/imageCategories/ImageCategories";
import CloseSidebarButton from "assets/images/cross-black.svg";
import OpenSidebarButton from "assets/images/menu-icon.svg";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";
import {
  CloseSidebarButtonStyle,
  ContainerMainContentStyle,
  ContainerSidebarBackgroundStyle,
  ContainerSidebarStyle,
  ContainerStyle,
  OpenSidebarButtonStyle,
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

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const isMobile = window.outerWidth <= 480;

  const mobileSidebarStatus = isMobileSidebarOpen
    ? "mobile-sidebar-open"
    : "mobile-sidebar-close";

  const handleOpenSidebar = () => setIsMobileSidebarOpen(true);
  const handleCloseSidebar = () => setIsMobileSidebarOpen(false);

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

      <OpenSidebarButtonStyle onClick={handleOpenSidebar}>
        <img src={OpenSidebarButton} alt="open" />
      </OpenSidebarButtonStyle>

      <ContainerSidebarBackgroundStyle
        className={mobileSidebarStatus}
        onClick={handleCloseSidebar}
      />

      <ContainerSidebarStyle className={mobileSidebarStatus}>
        <ImageCategoriesSidebar />

        <CloseSidebarButtonStyle onClick={handleCloseSidebar}>
          <img src={CloseSidebarButton} alt="close" />
        </CloseSidebarButtonStyle>
      </ContainerSidebarStyle>

      <ContainerMainContentStyle>{children}</ContainerMainContentStyle>
    </ContainerStyle>
  );
};

export default Container;
