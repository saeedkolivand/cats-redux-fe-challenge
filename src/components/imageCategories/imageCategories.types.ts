export interface ImageCategoriesPropsTypes {}

export type imageCategoriesResponseTypes = {
  id: number | string;
  name: string;
};

export interface ImageCategoriesReduxTypes {
  imageCategories?: imageCategoriesResponseTypes[];
  imageCategoriesLoading?: boolean;
  selectedImageCategory: {
    name: string;
    id?: number;
  };
}
