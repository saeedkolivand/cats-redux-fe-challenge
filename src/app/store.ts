import { configureStore } from "@reduxjs/toolkit";
import ImageCategoriesSlice from "../components/imageCategories/imageCategories.slice";
import CatImagesListSlice from "../components/catImagesList/catImagesList.slice";

const store = configureStore({
  reducer: {
    imageCategories: ImageCategoriesSlice.reducer,
    imagesList: CatImagesListSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
