import { createSlice } from "@reduxjs/toolkit";
import { ImageCategoriesReduxTypes } from "./imageCategories.types";

const initialState: ImageCategoriesReduxTypes = {
  imageCategories: [],
};

const ImageCategoriesSlice = createSlice({
  name: "imageCategoriesSlice",
  initialState,
  reducers: {
    addImageCategoriesAction: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export default ImageCategoriesSlice;
