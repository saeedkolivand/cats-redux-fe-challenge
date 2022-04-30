import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { ImageCategoriesPropsTypes } from "./imageCategories.types";
import { useDispatch, useSelector } from "../../app/hooks";
import { getImageCategoriesService } from "./imageCategories.api";
import {
  addImageCategoriesAction,
  addSelectedImageCategoryAction,
} from "./imageCategories.slice";
import { ImageCategoriesWrapperStyle } from "./imageCategories.style";

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

  const handleSelectedCategory = (id: string | number) =>
    dispatch(addSelectedImageCategoryAction(id));

  return (
    <ImageCategoriesWrapperStyle>
      <ul>
        {imageCategories?.map((item) => (
          <li key={`category-${item.id}`}>
            <span onClick={() => handleSelectedCategory(item.id)}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </ImageCategoriesWrapperStyle>
  );
};

export default ImageCategoriesSidebar;
