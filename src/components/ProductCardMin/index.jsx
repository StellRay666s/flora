import React from "react";
import style from "./index.module.scss";

function ProductCardMin({ image, title }) {
  return (
    <>
      <div className={style.cartWrapper}>
        <div className={style.cart}></div>
      </div>
    </>
  );
}

export default ProductCardMin;
