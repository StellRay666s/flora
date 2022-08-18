import React from "react";
import style from "./index.module.scss";
import ProductCard from "components/ProductCard";
import H1 from "components/H1";

function CatalogBlock({ data = Array(10).fill(0), isLoading }) {
  console.log(data);

  return (
    <>
      {" "}
      <h1 className={style.title}>
        <H1>КАТАЛОГ</H1>
      </h1>
      <div className={style.wrapperCarts}>
        {data.map(obj => (
          <ProductCard isLoading={isLoading} {...obj} />
        ))}
      </div>
    </>
  );
}

export default CatalogBlock;
