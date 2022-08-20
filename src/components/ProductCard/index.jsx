import React from "react";
import style from "./index.module.scss";
import AddButton from "components/AddButton";

function ProductCard({ price = 0, title = "", image = "", alt = "" }) {
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.cartWrapper}>
          <div className={style.imgBorder}>
            <div className={style.border}>
              <img src={image} alt={alt} className={style.img} />
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

export default ProductCard;
