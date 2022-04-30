import { createSlice } from "@reduxjs/toolkit";
import { ImageCategoriesReduxTypes } from "./imageCategories.types";

const initialState: ImageCategoriesReduxTypes = {
  imageCategories: [],
  selectedImageCategory: {
    id: undefined,
    name: "",
  },
  imageCategoriesLoading: true,
};

const ImageCategoriesSlice = createSlice({
  name: "imageCategoriesSlice",
  initialState,
  reducers: {
    addImageCategoriesAction: (state, action) => {
      return {
        ...state,
        imageCategories: action.payload,
        imageCategoriesLoading: false,
      };
    },
    addSelectedImageCategoryAction: (state, action) => {
      return {
        ...state,
        selectedImageCategory: action.payload,
      };
    },
  },
});

export const { addImageCategoriesAction, addSelectedImageCategoryAction } =
  ImageCategoriesSlice.actions;

export default ImageCategoriesSlice;
