import axios from "axios";
import Config from "./config";

const HttpService = axios.create({
  baseURL: Config.baseUrl,
});

export default HttpService;
