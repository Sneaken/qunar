import axios from "axios";

/**
 * 统一后台返回的格式
 */
axios.interceptors.response.use(function(response) {
  // Do something with response data
  return response.data.data;
});

//请求home组件的数据接口.
export let getHome = () => {
  return axios.get("/mock/index.json");
};

export let getCities = () => {
  return axios.get("/mock/city.json");
};
