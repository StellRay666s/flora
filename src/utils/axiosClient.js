import axios from "axios";

const axiosClient = axios.create({
  timeout: 30000,
  baseURL: process.env.REACT_APP_API_KEY,
});

export default axiosClient;
