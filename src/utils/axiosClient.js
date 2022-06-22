import axios from "axios";

const axiosClient = axios.create({
  timeout: 30000,
  baseURL: "https://flora-api-danila-edition.herokuapp.com/",
});

export default axiosClient;
