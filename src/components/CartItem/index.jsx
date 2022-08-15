import React from "react";

import H3 from "components/H3";
import style from "./index.module.scss";
import Count from "components/Count";

function CartItem({ title, price, img, alt = "" }) {
  return (
    <>
      <div className={style.wrapperItem}>
        <div className={style.img}>
          <img src={img} alt={alt} />
        </div>
        <div className={style.countTittleWrapper}>
          <h3>{title}</h3>
          <div className={style.childCount}>
            <span>Кол-во</span>
            <Count />
          </div>
        </div>
        <div className={style.price}>{price}</div>
      </div>
    </>
  );
}

export default CartItem;
