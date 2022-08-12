import { useState, useEffect } from "react";
import { getBouquets } from "requests/getBouquets";

function useFetchBouquets() {
  const [isLoading, setIsLoading] = useState(false);
  const [item, setItem] = useState([]);

  console.log(item);
  useEffect(() => {
    setIsLoading(false);
    async function getData() {
      const response = await getBouquets();
      setItem(response.data.data);
      setIsLoading(true);
    }
    getData();
  }, []);

  return [item, isLoading];
}

export { useFetchBouquets };
