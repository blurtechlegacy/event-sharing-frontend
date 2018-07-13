// import axios from "axios";
// import config from "./config";

// let instance = null;

// export default class XHRProvider {
//   constructor() {
//     if (instance !== null) {
//       return instance;
//     }
//   }

//   requestApi = (path, params) =>
//     axios.get(`${config.url}${path}`).then(response => response.data);

//   postRequest = (path, body) => {
//     axios.post(`${config.url}${path}`, body).then(response => response.data);
//   };
// }

import axios from "axios";
import config from "./config";

let instance = null;

export default class XHRProvider {
  constructor() {
    if (instance !== null) {
      return instance;
    }
    instance = axios.create({
      baseURL: config.url,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  get = path => instance.get(path).then(response => response.data);

  post = (path, body) =>
    instance.post(path, body).then(response => response.data);
}
