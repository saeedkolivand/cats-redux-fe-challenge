import { ImageCardPropsTypes } from "./components/imageCard/imageCard.types";

export interface CatImagesListReduxTypes {
  catImagesList: ImageCardPropsTypes[];
  catImagesListLoading: boolean;
}

export interface CatImagesListProps {
  refetch: () => void;
}
