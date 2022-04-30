import HttpService from "../../app/apiService";
import { CatImagesParamsTypes } from "./home.types";

const API = "/v1/images/search";

export const getCatImagesService = (params: CatImagesParamsTypes) => {
  return HttpService.get(`${API}`, {
    params,
  });
};
