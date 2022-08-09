import { axiosClient } from "utils/axiosClient";

async function getCartUsers() {
  const response = await axiosClient.get("/cart");
  return response;
}

export { getCartUsers };
