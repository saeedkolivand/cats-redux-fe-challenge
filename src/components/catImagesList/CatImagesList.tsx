import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "app/hooks";
import { getCatImagesService } from "pages/home/home.api";
import ImageCard from "./components/imageCard/ImageCard";
import { addCatImagesAction } from "./catImagesList.slice";
import { CatImagesListWrapperStyle } from "./catImagesList.style";

const CatImagesList = () => {
  const { imageCategories } = useSelector((state) => state.imageCategories);
  const { catImagesList } = useSelector((state) => state.imagesList);

  const dispatch = useDispatch();

  const { data, refetch } = useQuery("getCatImages", () =>
    getCatImagesService({ limit: 10 })
  );

  useEffect(() => {
    if (data?.data) {
      dispatch(addCatImagesAction(data.data));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, []);

  const onClick = () => refetch();

  return (
    <CatImagesListWrapperStyle>
      {catImagesList?.map((item) => (
        <ImageCard {...item} key={item.id} />
      ))}

      <button type="button" onClick={onClick}>
        load more
      </button>
    </CatImagesListWrapperStyle>
  );
};

export default CatImagesList;
