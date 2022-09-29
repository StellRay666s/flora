import React from "react";
import style from "./index.module.scss";
import BagIcon from "icons/BagIcon";
import { Link } from "react-router-dom";

function CartButton({ onClick = () => {}, count }) {
  return (
    <>
      <Link to={"/cart"}>
        <button onClick={onClick} title="Cart" aria-label="Cart" className={style.circle}>
          <BagIcon width={25} className={style.svg} />
          {count == 0 ? "" : <span className={style.span}>{count}</span>}
        </button>
      </Link>
    </>
  );
}

export default CartButton;
