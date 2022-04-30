import { createSlice } from "@reduxjs/toolkit";
import { ImageCategoriesReduxTypes } from "./imageCategories.types";

const initialState: ImageCategoriesReduxTypes = {
  imageCategories: [],
  selectedImageCategoryId: "",
  imageCategoriesLoading: true,
};

const ImageCategoriesSlice = createSlice({
  name: "imageCategoriesSlice",
  initialState,
  reducers: {
    addImageCategoriesAction: (state, action) => {
      return {
        imageCategories: action.payload,
        imageCategoriesLoading: false,
      };
    },
    addSelectedImageCategoryAction: (state, action) => {
      return {
        ...state,
        selectedImageCategoryId: action.payload,
      };
    },
  },
});

export const { addImageCategoriesAction, addSelectedImageCategoryAction } =
  ImageCategoriesSlice.actions;

export default ImageCategoriesSlice;
