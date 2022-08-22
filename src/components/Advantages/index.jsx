import React from "react";
import style from "./index.module.scss";
import { TruckIcon, BoqueteIcon, CreditCartIcon, GiftIcon } from "icons";

function Advantages() {
  return (
    <div className={style.advantaWrapper}>
      <div className={style.truck}>
        <TruckIcon fill="black" width={40} height={40} />
        <div className={style.title_description}>
          <h4>Бесплатная доставка по всему городу</h4>
          <span>от 500 руб</span>
        </div>
      </div>
      <div className={style.truck}>
        <BoqueteIcon fill="black" width={40} height={40} />
        <div>
          <h4>Если опоздаем на 15 минут</h4>
          <span>Цветы в подарок</span>
        </div>
      </div>
      <div className={style.truck}>
        <CreditCartIcon fill="black" width={40} height={40} />
        <div>
          <h4>Безопасное оформление заказа</h4>
          <span>Защита Pay Pal</span>
        </div>
      </div>
      <div className={style.truck}>
        <GiftIcon fill="black" width={40} height={40} />
        <div>
          <h4>Подарок</h4>
          <span>Оформим бесплатно</span>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
