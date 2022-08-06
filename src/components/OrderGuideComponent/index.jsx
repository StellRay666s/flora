import React from "react";
import style from "./index.module.scss";
import H1 from "components/H1";
import OrderGuideCard from "components/OrderGuideCard";
import { BoqueteIcon, BagIcon, CreditCartIcon, TruckIcon } from "icons";

function OrderGuideComponent() {
  return (
    <div>
      <div className={style.title}>
        <H1>КАК СДЕЛАТЬ ЗАКАЗ</H1>
      </div>
      <div className={style.cardWrapper}>
        <OrderGuideCard icon={<BoqueteIcon />} title={"Выбираете цветы которые хотите купить"} />
        <div className={style.line}></div>
        <OrderGuideCard icon={<BagIcon />} title={"Добавляете цветы в корзину"} />
        <div className={style.line}></div>
        <OrderGuideCard title={"Оформляете заказ"} />
        <OrderGuideCard icon={<CreditCartIcon />} title={"Выбираете способ оплаты"} />
        <div className={style.line}></div>
        <OrderGuideCard
          icon={<TruckIcon />}
          title={"И финальный момент - доставка цветов получателю"}
        />
      </div>
    </div>
  );
}

export default OrderGuideComponent;
