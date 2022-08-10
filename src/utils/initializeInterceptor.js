import axios from "axios";
import { axiosClient } from "./axiosClient";

const ACCESS_TOKEN_KEY = "token";

function initializeInterceptor() {
  axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = window.localStorage.getItem(ACCESS_TOKEN_KEY);
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
      const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);

      if (!token) {
        return Promise.reject(error);
      }

      let res;
      try {
        res = await axios.post(`${process.env.REACT_APP_API_KEY}/authentication/`, {
          accessToken: token,
          strategy: "jwt",
        });
      } catch (err) {
        console.log(err);
        localStorage.removeItem(ACCESS_TOKEN_KEY);
      }
      config.headers.Authorization = `${res.data.accessToken}`;
      localStorage.setItem(ACCESS_TOKEN_KEY, res.data.accessToken);

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
