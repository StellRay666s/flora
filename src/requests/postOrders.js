import { axiosClient } from "utils/axiosClient";

const defaultArguments = {
  products: [{ count: -0, id: "" }],
  paymentMethod: "card", // paymentMethod may be: 'card' || 'cash'
  address: "",
  date: "",
};

async function postOrders(
  date = defaultArguments.date,
  address = defaultArguments.address,
  paymentMethod = defaultArguments.paymentMethod,
  products = defaultArguments.products
) {
  const response = await axiosClient.post("/orders", {
    date: date,
    address: address,
    paymentMethod: paymentMethod,
    products: products,
  });

  return response;
}

export { postOrders };
