import { axiosClient } from "utils/axiosClient";

async function getOrders() {
  const response = await axiosClient.get("/orders");
  return response;
}

export { getOrders };
