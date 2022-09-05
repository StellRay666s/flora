import { axiosClient } from "utils/axiosClient";

async function getBouquets(_id = "") {
  const response = await axiosClient.get(`/bouquets/${_id}`);
  return response;
}

export { getBouquets };
