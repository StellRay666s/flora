import React from "react";
import style from "./index.module.scss";

function Count() {
  const [count, setCount] = React.useState(0);

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
          <button onClick={() => increment()}>+</button>
          <button disabled={count <= 0 ? true : ""} onClick={() => decrement()}>
            -
          </button>
        </div>
      </div>
    </>
  );
}

export default Count;
