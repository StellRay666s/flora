import React from "react";
import style from "./index.module.scss";
import H1 from "components/H1";
import OrderGuideCard from "components/OrderGuideCard";
import { BoqueteIcon, BagIcon, CreditCartIcon, TruckIcon } from "icons";
import Check from "icons/Check";

function OrderGuideComponent() {
  return (
    <div>
      <div className={style.title}>
        <H1>КАК СДЕЛАТЬ ЗАКАЗ</H1>
      </div>
      <div className={style.cardWrapper}>
        <OrderGuideCard
          icon={<BoqueteIcon width={50} height={50} color="white" />}
          title={"Выбираете цветы которые хотите купить"}
        />
        <div className={style.line}></div>
        <OrderGuideCard
          icon={<BagIcon width={50} height={50} />}
          title={"Добавляете цветы в корзину"}
        />
        <div className={style.line}></div>
        <OrderGuideCard
          icon={<Check firstCheck="white" secondCheck="white" bac1="#719da5" back2="#719da5" />}
          title={"Оформляете заказ"}
        />
        <OrderGuideCard
          icon={<CreditCartIcon color={"white"} width={50} height={50} />}
          title={"Выбираете способ оплаты"}
        />
        <div className={style.line}></div>
        <OrderGuideCard
          icon={<TruckIcon fill={"white"} width={50} height={50} />}
          title={"И финальный момент - доставка цветов получателю"}
        />
      </div>
    </div>
  );
}

export default OrderGuideComponent;
