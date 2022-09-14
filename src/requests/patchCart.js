import { axiosClient } from "utils/axiosClient";

async function patchCart(count, _id) {
  const response = axiosClient.patch(`/cart/${_id}`, {
    count: count,
  });
  return response;
}
export { patchCart };
