import React from "react";
import { getOrders } from "requests/getOrders";

function useFetchOrders() {
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async function fetchOrders() {
      setIsLoading(false);
      const response = await getOrders();
      setOrders(response.data.data);
      setIsLoading(true);
    })();
  }, []);
  return { orders, isLoading };
}

export { useFetchOrders };
