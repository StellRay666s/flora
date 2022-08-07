import { axiosClient } from "./axiosClient";

function initializeInterceptor() {
  axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
  });
}
export { initializeInterceptor };
