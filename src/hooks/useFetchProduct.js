import React from "react";
import { useParams } from "react-router-dom";
import { getBouquets } from "requests/getBouquets";

function useFetchProduct() {
  const [product, setProduct] = React.useState({});
  const { _id } = useParams();

  React.useEffect(() => {
    (async function getProduct(_id) {
      const bouquet = await getBouquets(_id);
      const product = bouquet.data;
      setProduct(product);
      console.log(product);
    })(_id);
  }, []);

  return { product };
}

export { useFetchProduct };
