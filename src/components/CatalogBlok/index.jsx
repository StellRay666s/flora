import React from "react";
import ProductCard from "components/ProductCard";
import H1 from "components/H1";
import Loading from "components/Loading";
import style from "./index.module.scss";
import { useAddToCart } from "hooks/useAddToCart";

function CatalogBlock({ data = [], isLoading }) {
  const addToCart = useAddToCart();

  return (
    <>
      <h1 className={style.title}>
        <H1>КАТАЛОГ</H1>
      </h1>
      {!isLoading ? (
        <div className={style.wrapperCarts}>
          {data.map(product => (
            <ProductCard
              addToCart={addToCart}
              key={product._id}
              isLoading={isLoading}
              {...product}
              id={product._id}
            />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CatalogBlock;
