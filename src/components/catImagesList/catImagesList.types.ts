export interface CatDataType {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
  categories?: [{ id: number | string; name: string }];
}

export interface CatImagesListReduxTypes {
  catImagesList: CatDataType[];
  catImagesListLoading: boolean;
}

export interface CatImagesListProps {
  refetch: () => void;
}
