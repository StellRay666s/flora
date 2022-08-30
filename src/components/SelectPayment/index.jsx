import React from "react";
import style from "./index.module.scss";

function SelectPayment({ value = "", setValue = () => {} }) {
  const payloadMethods = ["Наличными", "Apple Pay", "Банковская карта"];

  return (
    <>
      <div className={style.inputWrapper}>
        {payloadMethods.map((obj, index) => (
          <label className={style.label} key={index}>
            <input className={style.radio} type="radio" name="cash" />
            <span className={style.fake}></span>
            {obj}
          </label>
        ))}
      </div>
    </>
  );
}

export default SelectPayment;
