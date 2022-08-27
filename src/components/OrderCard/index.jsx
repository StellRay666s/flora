import React from "react";
import style from "./index.module.scss";
import Product from "./Product";

function OrderCard() {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.product}>
          {" "}
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className={style.info}>
          <div className={style.title}>Способ оплаты: наличными</div>
          <div className={style.title}>Итого: 2 500 руб</div>
          <div className={style.title}>Заказ от: 01.01.2002</div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
