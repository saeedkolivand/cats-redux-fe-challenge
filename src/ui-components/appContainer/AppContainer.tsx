import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "../../app/hooks";
import { AppContainerPropsTypes } from "./appContainer.types";
import { getImageCategoriesService } from "../../components/imageCategories/imageCategories.api";

const AppContainer: React.FC<AppContainerPropsTypes> = (props) => {
  const { children } = props;

  const { imageCategories } = useSelector((state) => state.imageCategories);
  const dispatch = useDispatch();

  const { data, error, refetch, isSuccess } = useQuery(
    "imageCategoriesService",
    getImageCategoriesService,
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    if (data && isSuccess) {
      console.log({ data });
    }
  }, [data]);

  return <div>{children}</div>;
};

export default AppContainer;
