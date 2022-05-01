import React, { useState } from "react";
import Image from "ui-components/image/Image";
import { ImageCardPropsTypes } from "./imageCard.types";
import { ImageCardStyle, ImageCardWrapperStyle } from "./imageCard.style";

const ImageCard: React.FC<ImageCardPropsTypes> = (props) => {
  const { id, url } = props;
  const [showFullScreen, setShowFullScreen] = useState(false);

  const handleOpenPreview = () => setShowFullScreen(true);
  const handleClosePreview = () => setShowFullScreen(false);

  return (
    <>
      <ImageCardWrapperStyle onClick={handleOpenPreview}>
        <ImageCardStyle src={url} alt={`cat-${id}`} />
      </ImageCardWrapperStyle>
      <Image
        showPreview={showFullScreen}
        url={url}
        hidePreview={handleClosePreview}
      />
    </>
  );
};

export default ImageCard;
