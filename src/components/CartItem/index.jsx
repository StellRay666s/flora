import React from "react";
import Count from "components/Count";

import style from "./index.module.scss";

function CartItem({ title = "Букет в горшке тюльпаны и ромашки", price = "1 200", img, alt = "" }) {
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
