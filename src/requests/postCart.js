import { axiosClient } from "utils/axiosClient";

async function postCart(count, productId) {
  const response = await axiosClient.post("/cart", {
    count: count,
    productId: productId,
  });
  console.log(response);
}
export { postCart };
