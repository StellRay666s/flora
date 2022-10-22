import React from "react";

import CrossClose from "components/CrossClose";
import H2 from "components/H2";
import ProductCardMin from "components/ProductCardMin";

import style from "./index.module.scss";
import { Link } from "react-router-dom";

function ThanksForOrderModal({ bouquets, isOpen = false, setIsOpen = () => {} }) {
  return (
    <>
      {isOpen ? (
        <div className={style.wrapper}>
          <div className={style.modalWrapper}>
            <div className={style.close}>
              <CrossClose onClick={() => setIsOpen()} />
            </div>
            <div className={style.title}>
              <H2>БЛАГОДАРИМ ЗА ПОКУПКУ</H2>
            </div>
            <div className={style.text}>
              <p>
                Перейти на страницу <Link to={"/orders"}>заказов.</Link>
              </p>
            </div>
            <div className={style.description}>
              <p>Смотрите так же:</p>
            </div>
            <div className={style.miniCart}>
              {bouquets.slice(0, 3).map(product => (
                <ProductCardMin image={product.image} title={product.title} _id={product._id} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ThanksForOrderModal;
