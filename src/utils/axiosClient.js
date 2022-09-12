import axios from "axios";
import { initializeInterceptor } from "./initializeInterceptor";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 9999999999,
});
initializeInterceptor();

export { axiosClient };
