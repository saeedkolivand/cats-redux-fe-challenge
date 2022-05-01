export interface CatImagesParamsTypes {
  limit: number;
  category_ids?: number | string;
}

export interface CatFilteredCategoryTypes {
  breeds: any[];
  id: string;
  url: string;
  width: number;
  height: number;
  categories: [{ id: number | string; name: string }];
}
