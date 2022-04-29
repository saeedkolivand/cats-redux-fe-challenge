import React from "react";
import { NotFoundPropsTypes } from "./notFound.types";
import { NotFoundStyle } from "./notFound.style";

const NotFound: React.FC<NotFoundPropsTypes> = (props) => {
  const { className = "" } = props;

  return (
    <NotFoundStyle
      className={`not-found ${className}`}
      aria-label="not-found-wrapper"
    >
      No Data :(
    </NotFoundStyle>
  );
};

export default NotFound;
