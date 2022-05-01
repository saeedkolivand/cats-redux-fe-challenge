import React from "react";
import { NotFoundPropsTypes } from "./notFound.types";
import { NotFoundStyle } from "./notFound.style";

const NotFound: React.FC<NotFoundPropsTypes> = (props) => {
  const { className = "" } = props;

  return (
    <NotFoundStyle
      className={`absolute-center ${className}`}
      aria-label="not-found-wrapper"
    >
      Page Not Found :(
    </NotFoundStyle>
  );
};

export default NotFound;
