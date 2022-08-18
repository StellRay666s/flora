import React from "react";
import style from "./index.module.scss";
import AddButton from "components/AddButton";
import Circle2 from "assets/gif/Circle2.gif";
function ProductCard({ price = 0, title = "", image = "", alt = "", isLoading }) {
  return (
    <>
      {isLoading ? (
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
      ) : (
        <div className={style.Loading}>
          <img alt="...Загрузка" src={Circle2} />
        </div>
      )}
    </>
  );
}

export default ProductCard;
