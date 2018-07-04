import axios from "axios";
import config from "./config";

let instance = null;

export default class XHRProvider {
  constructor() {
    if (instance !== null) {
      return instance;
    }
  }
  requestApi = (path, params) =>
    axios
      .get(`${config.uri}${path}`)
      .then(response => response.data);
}
