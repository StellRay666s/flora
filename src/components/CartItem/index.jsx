import React from "react";

import H3 from "components/H3";
import style from "./index.module.scss";
import Count from "components/Cout";

function CartItem({ title, price, img }) {
  return (
    <>
      <div className={style.wrapperItem}>
        <div className={style.img}>
          <img />
        </div>
        <div className={style.countTittleWrapper}>
          <h3>Букет в горшке Тюльпаны и ромашки</h3>
          <div className={style.childCount}>
            <span>Кол-во</span>
            <Count />
          </div>
        </div>
        <div className={style.price}>1 200</div>
      </div>
    </>
  );
}

export default CartItem;
