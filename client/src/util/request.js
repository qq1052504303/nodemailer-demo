import axios from "axios";
const baseUrl = "http://127.0.0.1";

const instance = axios.create();
instance.interceptors.response.use(
  function (response) {
    if (response?.status === 200) {
      return response.data;
    }
  },
  function (error) {
    return null;
  }
);

export default (url, option = {}) => {
  return instance({
    url,
    method: option.method || "get",
    data: option.data,
  });
};