import React from "react";
import style from "./index.module.scss";
import ProductCart from "components/ProductCart";
import H1 from "components/H1";

function CatalogBlock() {
  return (
    <>
      {" "}
      <h1>
        <H1>КАТАЛОГ</H1>
      </h1>
      <div className={style.wrapperCarts}>
        <ProductCart title={"Букет в горшке Тюльпаны и розы"} />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </>
  );
}

export default CatalogBlock;
