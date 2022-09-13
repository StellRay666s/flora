import { axiosClient } from "utils/axiosClient";

async function getCartUsers() {
  const response = await axiosClient.get("/cart");

  return response.data.data.map(item => ({
    ...item,
    ...{ price: item.count * item.product.price },
  }));
}

export { getCartUsers };
