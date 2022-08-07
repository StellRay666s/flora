import axios from "axios";
import { axiosClient } from "./axiosClient";

function initializeInterceptor() {
  axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem("token");
    return config;
  });
}

function postRefreshToken() {
  axiosClient.interceptors.use(
    async function (respons) {
      return respons;
    },
    async function (error) {
      if (error.respons.status !== 401) {
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

  axiosClient.interceptors.request.use(
    async function (config) {
      /** если токен есть в стораге то мы его суем в запрос */
      if (localStorage.getItem("STORAGE_ACCESS_TOKEN")) {
        config.headers.Authorization = `Bearer ${localStorage.getItem("STORAGE_ACCESS_TOKEN")}`;
      }
      return config;
    },
    async function (error) {
      return Promise.reject(error);
    }
  );
}

export { initializeInterceptor };
