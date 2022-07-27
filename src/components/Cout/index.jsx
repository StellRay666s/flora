import React from "react";
import style from "./index.module.scss";

function Count({ count = 0, setCount = () => {} }) {
  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <div className={style.wrapperCount}>
        <div className={style.count}>{count}</div>
        <div className={style.click}>
          <button aria-label="Add" onClick={() => increment()}>
            +
          </button>
          <button aria-label="Minus" disabled={count <= 0 ? true : ""} onClick={() => decrement()}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Count;
