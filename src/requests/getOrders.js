import { axiosClient } from "utils/axiosClient";

async function getOrders() {
  const respons = await axiosClient.get("/orders");
  return respons;
}

export { getOrders };
