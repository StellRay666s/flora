import { axiosClient } from "utils/axiosClient";
async function postOrders(date, address, paymentMethod, products) {
  const response = await axiosClient.post("/orders", {
    date: date,
    address: address,
    paymentMethod: paymentMethod,
    products: products, //продуктс это массив из объектов типа {count: 0, id: 0}
  });

  return response;
}

export { postOrders };
