import React, { useEffect } from "react";
import Container from "ui-components/container/Container";
import { useDispatch, useSelector } from "app/hooks";
import CatImagesList from "components/catImagesList/CatImagesList";
import { useQuery } from "react-query";
import {
  addCatImagesAction,
  addCatImagesCategoryAction,
} from "components/catImagesList/catImagesList.slice";
import { CatDataType } from "components/catImagesList/catImagesList.types";
import { getCatImagesService } from "./home.api";

const Home = () => {
  const { imageCategoriesLoading, selectedImageCategory } = useSelector(
    (state) => state.imageCategories
  );
  const { catImagesList } = useSelector((state) => state.imagesList);

  const dispatch = useDispatch();

  const { data, refetch, isLoading, isRefetching, isError } = useQuery(
    "getCatImages",
    () =>
      getCatImagesService({ limit: 10, category_ids: selectedImageCategory.id })
  );

  const handleAddCatImages = (data: CatDataType[]) => {
    const temp = [...catImagesList, ...data];
    return dispatch(addCatImagesAction(temp));
  };

  const handleAddCatImagesWithCategories = (data: CatDataType[]) => {
    if (
      data &&
      data[0].categories &&
      data[0].categories[0] &&
      data[0].categories[0].name &&
      selectedImageCategory.name === data[0].categories[0].name
    ) {
      const isNewData = catImagesList.find(
        (item) =>
          (item && item.categories && item.categories[0].name) ===
          selectedImageCategory.name
      );
      if (isNewData) {
        const temp = [...catImagesList, ...data];
        return dispatch(addCatImagesCategoryAction(temp));
      }
      dispatch(addCatImagesCategoryAction(data));
    }
  };

  useEffect(() => {
    if (data?.data && !selectedImageCategory.id) {
      handleAddCatImages(data.data);
    }
    if (data?.data && selectedImageCategory.id) {
      handleAddCatImagesWithCategories(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (selectedImageCategory) refetch();
  }, [selectedImageCategory]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container
      loading={imageCategoriesLoading || isLoading || isRefetching}
      hasError={isError}
      errorRetryFunction={refetch}
    >
      <CatImagesList refetch={refetch} />
    </Container>
  );
};

export default Home;
