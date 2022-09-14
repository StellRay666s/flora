import React from "react";
import style from "./index.module.scss";

function Count({ count = 0, setIncrease = () => {}, setDecrease = () => {} }) {
  return (
    <>
      <div className={style.wrapperCount}>
        <div className={style.count}>{count}</div>
        <div className={style.click}>
          <button aria-label="Add" onClick={() => setIncrease()}>
            +
          </button>
          <button
            aria-label="Minus"
            disabled={count === 0 ? true : ""}
            onClick={() => setDecrease()}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Count;
