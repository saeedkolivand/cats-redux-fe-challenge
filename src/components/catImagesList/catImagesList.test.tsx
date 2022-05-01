import CatImagesListSlice, { addCatImagesAction } from "./catImagesList.slice";
import { CatDataType, CatImagesListReduxTypes } from "./catImagesList.types";

describe("Cat images list slice tests", () => {
  const { reducer } = CatImagesListSlice;

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual({
      catImagesList: [],
      catImagesListLoading: true,
    });
  });

  it("should handle a cat data being added to an empty catImagesList", () => {
    const previousState: CatImagesListReduxTypes = {
      catImagesList: [],
      catImagesListLoading: true,
    };
    const newValue: CatDataType[] = [
      {
        breeds: [],
        categories: [
          {
            id: 9,
            name: "dream",
          },
        ],
        id: "1rd",
        url: "https://cdn2.thecatapi.com/images/1rd.jpg",
        width: 500,
        height: 333,
      },
    ];

    expect(reducer(previousState, addCatImagesAction(newValue))).toEqual({
      catImagesList: [
        {
          breeds: [],
          categories: [
            {
              id: 9,
              name: "dream",
            },
          ],
          id: "1rd",
          url: "https://cdn2.thecatapi.com/images/1rd.jpg",
          width: 500,
          height: 333,
        },
      ],
      catImagesListLoading: false,
    });
  });

  it("should update a cat data with new data", () => {
    const previousState: CatImagesListReduxTypes = {
      catImagesList: [
        {
          breeds: [],
          id: "1rd",
          url: "https://cdn2.thecatapi.com/images/1rd.jpg",
          width: 500,
          height: 333,
        },
      ],
      catImagesListLoading: false,
    };

    const newData: CatDataType[] = [
      ...previousState.catImagesList,
      {
        breeds: [],
        id: "3dk",
        url: "https://cdn2.thecatapi.com/images/3dk.jpg",
        width: 500,
        height: 374,
      },
    ];

    expect(reducer(previousState, addCatImagesAction(newData))).toEqual({
      catImagesList: [
        {
          breeds: [],
          id: "1rd",
          url: "https://cdn2.thecatapi.com/images/1rd.jpg",
          width: 500,
          height: 333,
        },
        {
          breeds: [],
          id: "3dk",
          url: "https://cdn2.thecatapi.com/images/3dk.jpg",
          width: 500,
          height: 374,
        },
      ],
      catImagesListLoading: false,
    });
  });

  it("should update a cat data contains category with new data", () => {
    const previousState: CatImagesListReduxTypes = {
      catImagesList: [
        {
          breeds: [],
          categories: [{ id: 9, name: "dream" }],
          id: "1rd",
          url: "https://cdn2.thecatapi.com/images/1rd.jpg",
          width: 500,
          height: 333,
        },
      ],
      catImagesListLoading: false,
    };

    const newData: CatDataType[] = [
      ...previousState.catImagesList,
      {
        breeds: [],
        categories: [{ id: 15, name: "clothes" }],
        id: "3dk",
        url: "https://cdn2.thecatapi.com/images/3dk.jpg",
        width: 500,
        height: 374,
      },
    ];

    expect(reducer(previousState, addCatImagesAction(newData))).toEqual({
      catImagesList: [
        {
          breeds: [],
          categories: [{ id: 9, name: "dream" }],
          id: "1rd",
          url: "https://cdn2.thecatapi.com/images/1rd.jpg",
          width: 500,
          height: 333,
        },
        {
          breeds: [],
          categories: [{ id: 15, name: "clothes" }],
          id: "3dk",
          url: "https://cdn2.thecatapi.com/images/3dk.jpg",
          width: 500,
          height: 374,
        },
      ],
      catImagesListLoading: false,
    });
  });
});
