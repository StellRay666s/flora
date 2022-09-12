import { axiosClient } from "utils/axiosClient";

async function deleteBoquets(_id) {
  const response = await axiosClient.delete(`/cart/${_id}`);
  return response;
}

export { deleteBoquets };
