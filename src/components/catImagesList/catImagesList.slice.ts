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
        catImagesList: [...state.catImagesList, ...action.payload],
        catImagesListLoading: false,
      };
    },
  },
});

export const { addCatImagesAction } = CatImagesListSlice.actions;

export default CatImagesListSlice;
