import { axiosClient } from "utils/axiosClient";

async function getCartUsers() {
  const response = await axiosClient.get("/cart");
  const product = response.data.data;
  return product.map(item => ({ ...item, ...{ price: item.count * item.product.price } }));
}

export { getCartUsers };
