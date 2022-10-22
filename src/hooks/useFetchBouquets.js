import { useState, useEffect } from "react";
import { getBouquets } from "requests/getBouquets";
import { useNotification } from "./useNotification";

function useFetchBouquets() {
  const [isLoading, setIsLoading] = useState(true);
  const [bouquets, setBouquets] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(null);
  const notify = useNotification();
  const _id = "";

  useEffect(() => {
    setIsLoading(true);
    (async function getData(_id, skip) {
      try {
        const response = await getBouquets(_id, skip);
        const bouquets = response.data.data;
        setTotal(response.data.total);
        setIsLoading(false);
        setBouquets(bouquets);
      } catch (error) {
        notify("Ошибка при загрузке цветов", "error");
        setIsLoading(true);
      }
    })(_id, skip);
  }, [skip]);

  return { bouquets, isLoading, skip, setSkip, total, setTotal };
}

export { useFetchBouquets };
