import { createSlice } from "@reduxjs/toolkit";
import { CatImagesListReduxTypes } from "./catImagesList.types";

const initialState: CatImagesListReduxTypes = {
  catImagesList: [],
  catImagesListLoading: true,
};

const CatImagesListSlice = createSlice({
  name: "catImagesListSlice",
  initialState,
  reducers: {
    addCatImagesAction: (state, action) => {
      return {
        catImagesList: action.payload,
        catImagesListLoading: false,
      };
    },
    addCatImagesCategoryAction: (state, action) => {
      return {
        catImagesList: action.payload,
        catImagesListLoading: false,
      };
    },
  },
});

export const { addCatImagesAction, addCatImagesCategoryAction } =
  CatImagesListSlice.actions;

export default CatImagesListSlice;
