import React from "react";
import ReactDOM from "react-dom";
import { LoadingPropsTypes } from "./loading.types";
import {
  LoaderSpinnerStyle,
  LoadingBackgroundStyle,
  LoadingBodyStyle,
  LoadingWrapperStyle,
} from "./loading.style";

const Loading: React.FC<LoadingPropsTypes> = (props) => {
  const { loading = false } = props;

  const loadingStatus = loading ? "show-loading" : "hide-loading";

  return ReactDOM.createPortal(
    <>
      <LoadingBackgroundStyle className={`absolute-center ${loadingStatus}`} />
      <LoadingWrapperStyle
        className={`absolute-center ${loadingStatus}`}
        aria-label="loading-wrapper"
      >
        <LoadingBodyStyle className="flex-center absolute-center">
          <LoaderSpinnerStyle className="loading--loader" />
        </LoadingBodyStyle>
      </LoadingWrapperStyle>
    </>,
    document.getElementById("loading")!
  );
};

export default Loading;
