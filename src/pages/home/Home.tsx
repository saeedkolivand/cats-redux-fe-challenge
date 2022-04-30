import React, { useEffect } from "react";
import Container from "ui-components/container/Container";
import { useDispatch, useSelector } from "app/hooks";
import CatImagesList from "components/catImagesList/CatImagesList";
import { useQuery } from "react-query";
import { addCatImagesAction } from "components/catImagesList/catImagesList.slice";
import { getCatImagesService } from "./home.api";

const Home = () => {
  const { imageCategoriesLoading } = useSelector(
    (state) => state.imageCategories
  );
  const dispatch = useDispatch();

  const { data, refetch, isLoading, isRefetching } = useQuery(
    "getCatImages",
    () => getCatImagesService({ limit: 10 })
  );

  useEffect(() => {
    if (data?.data) {
      dispatch(addCatImagesAction(data.data));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <Container loading={imageCategoriesLoading || isLoading || isRefetching}>
      <CatImagesList refetch={refetch} />
    </Container>
  );
};

export default Home;
