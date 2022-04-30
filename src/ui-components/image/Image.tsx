import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import ClosePreviewButton from "assets/images/cross.svg";
import {
  ImageBackgroundStyle,
  ImagePreviewBodyStyle,
  ImagePreviewCloseStyle,
  ImagePreviewStyle,
} from "./image.style";
import { ImagePropsTypes } from "./image.types";

const Image: React.FC<ImagePropsTypes> = (props) => {
  const { url, showPreview, hidePreview } = props;

  const previewStatus = showPreview
    ? "show-image-preview"
    : "hide-image-preview";

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        event.preventDefault();
        hidePreview();
      }
    };

    if (showPreview) {
      document.addEventListener("keydown", listener);
    }

    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [showPreview]);

  return ReactDOM.createPortal(
    <>
      <ImageBackgroundStyle
        className={`absolute-center ${previewStatus}`}
        onClick={hidePreview}
      />

      <ImagePreviewCloseStyle
        src={ClosePreviewButton}
        alt="close"
        onClick={hidePreview}
      />
      <ImagePreviewBodyStyle
        className={`absolute-center flex-center ${previewStatus}`}
      >
        <ImagePreviewStyle src={url} alt="preview" />
      </ImagePreviewBodyStyle>
    </>,
    document.getElementById("image-preview")!
  );
};

export default Image;
