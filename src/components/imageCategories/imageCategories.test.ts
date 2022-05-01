import ImageCategoriesSlice, {
  addImageCategoriesAction,
  addSelectedImageCategoryAction,
} from "./imageCategories.slice";
import {
  ImageCategoriesReduxTypes,
  imageCategoriesResponseTypes,
} from "./imageCategories.types";

describe("images Categories slice tests", () => {
  const { reducer } = ImageCategoriesSlice;

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({
      imageCategories: [],
      selectedImageCategory: {
        id: undefined,
        name: "",
      },
      imageCategoriesLoading: true,
    });
  });

  it("should handle a category being added to an empty imageCategories", () => {
    const previousState: ImageCategoriesReduxTypes = {
      imageCategories: [],
      selectedImageCategory: {
        id: undefined,
        name: "",
      },
      imageCategoriesLoading: true,
    };
    const newValue: imageCategoriesResponseTypes[] = [{ id: 5, name: "boxes" }];

    expect(reducer(previousState, addImageCategoriesAction(newValue))).toEqual({
      imageCategories: [{ id: 5, name: "boxes" }],
      selectedImageCategory: {
        id: undefined,
        name: "",
      },
      imageCategoriesLoading: false,
    });
  });

  it("should add selected category to selectedImageCategory object", () => {
    const previousState: ImageCategoriesReduxTypes = {
      imageCategories: [
        { id: 5, name: "boxes" },
        { id: 15, name: "clothes" },
      ],
      selectedImageCategory: {
        id: undefined,
        name: "",
      },
      imageCategoriesLoading: true,
    };
    const newValue: imageCategoriesResponseTypes[] = [
      { id: 15, name: "clothes" },
    ];

    expect(
      reducer(previousState, addSelectedImageCategoryAction(newValue))
    ).toEqual({
      imageCategories: [
        { id: 5, name: "boxes" },
        { id: 15, name: "clothes" },
      ],
      selectedImageCategory: [{ id: 15, name: "clothes" }],
      imageCategoriesLoading: true,
    });
  });
});
