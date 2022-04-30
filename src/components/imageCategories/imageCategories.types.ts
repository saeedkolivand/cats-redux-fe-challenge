export interface ImageCategoriesPropsTypes {}

type imageCategoriesResponseTypes = {
  id: number;
  name: string;
};

export interface ImageCategoriesReduxTypes {
  imageCategories?: imageCategoriesResponseTypes[];
  imageCategoriesLoading?: boolean;
  selectedImageCategoryId?: string;
}
