import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { ImageCategoriesPropsTypes } from "./imageCategories.types";
import { useDispatch, useSelector } from "../../app/hooks";
import { getImageCategoriesService } from "./imageCategories.api";
import { addImageCategoriesAction } from "./imageCategories.slice";

const ImageCategoriesSidebar: React.FC<ImageCategoriesPropsTypes> = (props) => {
  const { imageCategories } = useSelector((state) => state.imageCategories);
  const dispatch = useDispatch();

  const { data, isLoading, isError, refetch, isSuccess } = useQuery(
    "imageCategoriesService",
    getImageCategoriesService
  );

  useEffect(() => {
    if (!imageCategories?.length) refetch();
  }, [imageCategories]);

  useEffect(() => {
    if (data && isSuccess) {
      dispatch(addImageCategoriesAction(data.data));
    }
  }, [data]);

  return (
    <nav>
      <ul>
        {imageCategories?.map((item) => (
          <li key={`category-${item.id}`}>{item.name}</li>
        ))}
      </ul>
    </nav>
  );
};

export default ImageCategoriesSidebar;
