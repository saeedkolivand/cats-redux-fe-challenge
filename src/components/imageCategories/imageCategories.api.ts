import HttpService from "../../app/apiService";

const API = "/v1/categories";

export const getImageCategoriesService = () => {
  return HttpService.get(`${API}`);
};
