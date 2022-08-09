import { axiosClient } from "utils/axiosClient";

async function getCartUsers() {
  const respons = await axiosClient.get("/cart");
  return respons;
}

export { getCartUsers };
