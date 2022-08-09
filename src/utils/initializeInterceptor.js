import axios from "axios";
import { axiosClient } from "./axiosClient";

function initializeInterceptor() {
  axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
  });
  axiosClient.interceptors.response.use(
    async function (response) {
      return response;
    },
    async function (error) {
      if (error.response.status !== 401) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
      const config = error.config;

      const refreshToken = localStorage.getItem("STORAGE_REFRESH_TOKEN");

      if (!refreshToken) {
        return Promise.reject(error);
      }

      let res;
      try {
        res = await axios.post(`${process.env.REACT_APP_API_KEY}/authentication/refresh`, {
          refreshToken,
        });
      } catch (err) {
        console.log(err);
        localStorage.removeItem("STORAGE_REFRESH_TOKEN");
        localStorage.removeItem("STORAGE_ACCESS_TOKEN");
      }
      config.headers.Authorization = `Bearer ${res.data.accessToken}`;

      localStorage.setItem("STORAGE_REFRESH_TOKEN", res.data.refreshToken);
      localStorage.setItem("STORAGE_ACCESS_TOKEN", res.data.accessToken);

      return new Promise((resolve, reject) => {
        axios
          .request(config)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  );
}

export { initializeInterceptor };
