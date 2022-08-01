import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_KEY,
  timeout: 9999999999,
});
export default { axiosClient };
