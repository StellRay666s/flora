import React from "react";
import ProductCard from "components/ProductCard";
import H1 from "components/H1";
import Loading from "components/Loading";

import style from "./index.module.scss";

function CatalogBlock({ data = [], isLoading }) {
  return (
    <>
      <h1 className={style.title}>
        <H1>КАТАЛОГ</H1>
      </h1>
      {!isLoading ? (
        <div className={style.wrapperCarts}>
          {data.map(obj => (
            <ProductCard isLoading={isLoading} {...obj} />
          ))}
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default CatalogBlock;
