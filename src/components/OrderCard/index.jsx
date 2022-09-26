import React from "react";
import Product from "./Product";

import style from "./index.module.scss";

function OrderCard({ date = "01.01.2002", paymentMethod = "Наличными", products }) {
  function priceСalculation() {
    const priceOnePosition = products.map(product => product.count * product.product.price);
    const priceSomePositions = priceOnePosition.reduce((sum, price) => {
      return sum + price;
    }, 0);

    return priceSomePositions;
  }

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.product}>
          {" "}
          {products.map(boquets => (
            <Product
              key={boquets.product._id}
              img={boquets.product.image}
              title={boquets.product.title}
            />
          ))}
        </div>
        <div className={style.info}>
          <div className={style.title}>Способ оплаты: {paymentMethod}</div>
          <div className={style.title}>Итого: {priceСalculation()} руб</div>
          <div className={style.title}>Заказ от: {date}</div>
        </div>
      </div>
    </>
  );
}

export default OrderCard;
