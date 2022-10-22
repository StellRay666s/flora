import { axiosClient } from "utils/axiosClient";

async function getBouquets(_id = "", skip = 0) {
  const response = await axiosClient.get(`/bouquets/${_id}`, {
    params: {
      $skip: skip,
      $limit: 6,
    },
  });
  return response;
}

export { getBouquets };
