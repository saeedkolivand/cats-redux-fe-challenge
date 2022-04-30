import React from "react";
import { useSelector } from "app/hooks";
import ImageCard from "./components/imageCard/ImageCard";
import {
  CatImagesListLoadMoreStyle,
  CatImagesListWrapperStyle,
} from "./catImagesList.style";
import { CatImagesListProps } from "./catImagesList.types";

const CatImagesList: React.FC<CatImagesListProps> = (props) => {
  const { refetch } = props;

  const { catImagesList } = useSelector((state) => state.imagesList);

  const onClick = () => refetch();

  return (
    <div style={{ display: "grid" }}>
      <CatImagesListWrapperStyle>
        {catImagesList?.map((item) => (
          <ImageCard {...item} key={item.id} />
        ))}
      </CatImagesListWrapperStyle>

      <CatImagesListLoadMoreStyle type="button" onClick={onClick}>
        Load More
      </CatImagesListLoadMoreStyle>
    </div>
  );
};

export default CatImagesList;
