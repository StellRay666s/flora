import { axiosClient } from "utils/axiosClient";

async function getCartUsers() {
  const respons = axiosClient.get("/cart");
  console.log(respons);
}

export { getCartUsers };
