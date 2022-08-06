import React from "react";
import style from "./index.module.scss";
import AddButton from "components/AddButton";

function ProductCart({ price, title }) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.cartWrapper}>
          <div className={style.imgBorder}>
            <div className={style.border}>
              <img className={style.img} />
            </div>
          </div>
          <div className={style.title}>{title}</div>
          <span className={style.price}>{price} руб.</span>
          <div className={style.addBusket}>
            <AddButton />
            <p>Добавить в корзину</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart;
