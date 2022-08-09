import { axiosClient } from "utils/axiosClient";

async function getOrders() {
  const respons = axiosClient.get("/orders");
}

export { getOrders };
