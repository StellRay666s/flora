import React from "react";
import style from "./index.module.scss";
import { CrossClose, H2, ProductCartMin } from "components";

function ModalWindow() {
  return (
    <>
      <div className={style.modalWrapper}>
        <div className={style.close}>
          <CrossClose />
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
          <ProductCartMin />
          <ProductCartMin />
          <ProductCartMin />
          <ProductCartMin />
        </div>
      </div>
    </>
  );
}

export default ModalWindow;
