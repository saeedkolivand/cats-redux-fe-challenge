import { createSlice } from "@reduxjs/toolkit";
import { ImageCategoriesReduxTypes } from "./imageCategories.types";

const initialState: ImageCategoriesReduxTypes = {
  imageCategories: [],
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
  },
});

export const { addImageCategoriesAction } = ImageCategoriesSlice.actions;

export default ImageCategoriesSlice;
