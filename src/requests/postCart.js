import { axiosClient } from "utils/axiosClient";

async function postCart(count = 0, productId = "") {
  const response = await axiosClient.post("/cart", {
    count: count,
    productId: productId,
  });
  return response;
  console.log(response);
}
export { postCart };
