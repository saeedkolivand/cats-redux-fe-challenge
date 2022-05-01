import React, { useEffect } from "react";
import Container from "ui-components/container/Container";
import { useDispatch, useSelector } from "app/hooks";
import CatImagesList from "components/catImagesList/CatImagesList";
import { useQuery } from "react-query";
import {
  addCatImagesAction,
  addCatImagesCategoryAction,
} from "components/catImagesList/catImagesList.slice";
import { getCatImagesService } from "./home.api";
import { CatFilteredCategoryTypes } from "./home.types";

const Home = () => {
  const { imageCategoriesLoading, selectedImageCategory } = useSelector(
    (state) => state.imageCategories
  );
  const { catImagesList } = useSelector((state) => state.imagesList);

  const dispatch = useDispatch();

  const { data, refetch, isLoading, isRefetching, isPreviousData, isError } =
    useQuery("getCatImages", () =>
      getCatImagesService({ limit: 10, category_ids: selectedImageCategory.id })
    );

  useEffect(() => {
    if (data?.data && !selectedImageCategory.id) {
      const temp = [...catImagesList, ...data.data];
      dispatch(addCatImagesAction(temp));
    }
  }, [data]);

  useEffect(() => {
    if (data?.data && selectedImageCategory.id) {
      const serverCategories = data.data.map(
        (item: CatFilteredCategoryTypes) => {
          return {
            ...item,
            categories: item.categories[0],
          };
        }
      );

      if (selectedImageCategory.name === serverCategories[0].categories.name) {
        const isSameData = catImagesList.find(
          (item) => item.categories?.name === selectedImageCategory.name
        );
        if (isSameData) {
          const temp = [...catImagesList, ...serverCategories];
          dispatch(addCatImagesCategoryAction(temp));
        }
        if (!isSameData) {
          const temp = [...serverCategories];
          dispatch(addCatImagesCategoryAction(temp));
        }
      }
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
