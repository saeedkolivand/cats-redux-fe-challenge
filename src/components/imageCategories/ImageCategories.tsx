import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "app/hooks";
import {
  ImageCategoriesPropsTypes,
  imageCategoriesResponseTypes,
} from "./imageCategories.types";
import { getImageCategoriesService } from "./imageCategories.api";
import {
  addImageCategoriesAction,
  addSelectedImageCategoryAction,
} from "./imageCategories.slice";
import { ImageCategoriesWrapperStyle } from "./imageCategories.style";

const ImageCategoriesSidebar: React.FC<ImageCategoriesPropsTypes> = (props) => {
  const { imageCategories, selectedImageCategory } = useSelector(
    (state) => state.imageCategories
  );
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

  const handleSelectedCategory = (item: imageCategoriesResponseTypes) =>
    dispatch(addSelectedImageCategoryAction(item));

  return (
    <ImageCategoriesWrapperStyle>
      <ul>
        {imageCategories?.map((item) => (
          <li
            key={`category-${item.id}`}
            className={`${
              item.name === selectedImageCategory.name ? "active-category" : ""
            }`}
          >
            <span onClick={() => handleSelectedCategory(item)}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>
    </ImageCategoriesWrapperStyle>
  );
};

export default ImageCategoriesSidebar;
