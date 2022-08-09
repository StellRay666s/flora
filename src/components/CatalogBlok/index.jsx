import React from "react";
import style from "./index.module.scss";
import ProductCart from "components/ProductCart";
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
          <ProductCart {...obj} />
        ))}
      </div>
    </>
  );
}

export default CatalogBlock;
