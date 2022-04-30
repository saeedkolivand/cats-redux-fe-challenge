import React from "react";
import Container from "../../ui-components/container/Container";
import { useSelector } from "../../app/hooks";
import CatImagesList from "../../components/catImagesList/CatImagesList";

const Home = () => {
  const { imageCategoriesLoading } = useSelector(
    (state) => state.imageCategories
  );
  const { catImagesListLoading } = useSelector((state) => state.imagesList);

  return (
    <Container loading={imageCategoriesLoading || catImagesListLoading}>
      <CatImagesList />
    </Container>
  );
};

export default Home;
