import React from "react";
import style from "./index.module.scss";
import { BagIcon } from "icons";

function CartButton({ onClick = () => {} }) {
  return (
    <>
      <button onClick={onClick} title="Cart" aria-label="Cart" className={style.circle}>
        <BagIcon width={25} className={style.svg} />
        <span className={style.span}>1</span>
      </button>
    </>
  );
}

export default CartButton;
