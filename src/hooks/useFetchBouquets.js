import { useState, useEffect } from "react";
import { getBouquets } from "requests/getBouquets";
import { useNotification } from "./useNotification";

function useFetchBouquets() {
  const [isLoading, setIsLoading] = useState(true);
  const [bouquets, setBouquets] = useState([]);
  const notify = useNotification();

  useEffect(() => {
    setIsLoading(true);
    (async function getData() {
      try {
        const response = await getBouquets();
        const bouquets = response.data.data;
        setIsLoading(false);
        setBouquets(bouquets);
      } catch (error) {
        notify("Ошибка при загрузке цветов", "error");
        setIsLoading(true);
      }
    })();
  }, []);

  return { bouquets, isLoading };
}

export { useFetchBouquets };
