import React from "react";
import style from "./index.module.scss";
import { BagIcon } from "icons";

function CartButton({ onClick = () => {} }) {
  return (
    <>
      <button aria-label="Кликни меня бля" className={style.circle}>
        <BagIcon className={style.svg} />
        <span className={style.span}>1</span>
      </button>
      <></>
    </>
  );
}

export default CartButton;
