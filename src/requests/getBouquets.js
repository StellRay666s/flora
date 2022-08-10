import { axiosClient } from "utils/axiosClient";

async function getBouquets() {
  const response = await axiosClient.get("/bouquets");
  return response;
}

export { getBouquets };
