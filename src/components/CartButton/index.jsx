import React from "react";
import style from "./index.module.scss";
import { BagIcon } from "icons";

function CartButton() {
  return (
    <>
      <div className={style.circle}>
        <BagIcon className={style.svg} />
        <span className={style.span}>1</span>
      </div>
      <></>
    </>
  );
}

export default CartButton;
