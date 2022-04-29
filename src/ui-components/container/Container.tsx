import React from "react";
import { ContainerPropsTypes } from "./container.types";
import Loading from "../loading/Loading";
import { ContainerStyle } from "./container.style";
import Error from "../error/Error";

const Container: React.FC<ContainerPropsTypes> = (props) => {
  const {
    children,
    loading = false,
    hasError = false,
    errorMessage,
    errorRetryFunction,
    className,
    style,
    onClick,
  } = props;

  return (
    <ContainerStyle className={className} onClick={onClick} style={style}>
      <Loading loading={loading} />
      <Error
        fetchDataFunction={errorRetryFunction}
        hasError={hasError}
        errorMessage={errorMessage}
      />

      {children && children}
    </ContainerStyle>
  );
};

export default Container;
