import React from "react";
import style from "./index.module.scss";
import Product from "./Product";

function OrderCard({ price = "2 500", date = "01.01.2002", paymentMethod = "Наличными" }) {
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
          <div className={style.title}>Способ оплаты:{paymentMethod}</div>
          <div className={style.title}>Итого: {price} руб</div>
          <div className={style.title}>Заказ от: {date}</div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
