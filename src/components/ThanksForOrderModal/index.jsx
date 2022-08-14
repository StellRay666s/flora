import React from "react";
import style from "./index.module.scss";
import { CrossClose, H2, ProductCardMin } from "components";

function ThanksForOrderModal({ isOpen, setIsOpen }) {
  return (
    <>
      {isOpen ? (
        <div className={style.modalWrapper}>
          <div className={style.close}>
            <CrossClose onClick={() => setIsOpen(!isOpen)} />
          </div>
          <div className={style.title}>
            <H2>БЛАГОДАРИМ ЗА ПОКУПКУ</H2>
          </div>
          <div className={style.text}>
            <p>Посмотрите пожалуйста почту, мы отправили туда информацию о закзазе</p>
          </div>
          <div className={style.description}>
            <p>Смотрите так же:</p>
          </div>
          <div className={style.miniCart}>
            <ProductCardMin />
            <ProductCardMin />
            <ProductCardMin />
            <ProductCardMin />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default ThanksForOrderModal;
