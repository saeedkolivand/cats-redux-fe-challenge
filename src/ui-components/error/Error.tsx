import ReactDOM from "react-dom";
import React from "react";
import { ErrorPropsTypes } from "./error.types";
import {
  ErrorBackgroundStyle,
  ErrorMessageTextStyle,
  ErrorRetryButton,
  ErrorWrapperStyle,
} from "./error.style";

const Error: React.FC<ErrorPropsTypes> = (props) => {
  const { hasError, fetchDataFunction, errorMessage = "" } = props;

  const errorStatus = hasError ? "show-error" : "hide-error";

  return ReactDOM.createPortal(
    <>
      <ErrorBackgroundStyle className={`absolute-center ${errorStatus}`} />
      <ErrorWrapperStyle
        className={`absolute-center ${errorStatus}`}
        aria-label="error-wrapper"
      >
        <ErrorMessageTextStyle>{errorMessage}</ErrorMessageTextStyle>
        <ErrorRetryButton type="button" onClick={fetchDataFunction}>
          Retry
        </ErrorRetryButton>
      </ErrorWrapperStyle>
    </>,
    document.getElementById("error-modal")!
  );
};

export default Error;
