import { useState, useEffect } from "react";
import { getBouquets } from "requests/getBouquets";
import { useNotification } from "./useNotification";

function useFetchBouquets() {
  const [isLoading, setIsLoading] = useState(false);
  const [bouquets, setBouquets] = useState([]);
  const notify = useNotification();

  useEffect(() => {
    setIsLoading(false);
    (async function getData() {
      try {
        const response = await getBouquets();
        setBouquets(response.data.data);
        setIsLoading(true);
      } catch (error) {
        notify("Ошибка при загрузке цветов", false);
        setIsLoading(false);
      }
    })();
  }, []);

  return { bouquets, isLoading };
}

export { useFetchBouquets };
