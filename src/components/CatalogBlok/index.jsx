import React from "react";
import style from "./index.module.scss";
import ProductCard from "components/ProductCard";
import H1 from "components/H1";

function CatalogBlock({ data }) {
  return (
    <>
      {" "}
      <h1>
        <H1>КАТАЛОГ</H1>
      </h1>
      <div className={style.wrapperCarts}>
        {data.map(obj => (
          <ProductCard {...obj} />
        ))}
      </div>
    </>
  );
}

export default CatalogBlock;
