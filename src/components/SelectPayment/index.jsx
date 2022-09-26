import React from "react";
import style from "./index.module.scss";

function SelectPayment({ value = "", setValue = () => {} }) {
  const payloadMethods = ["Cash", "Apple Pay", "Card"];

  function selectPaymentMethod(index) {
    setValue(payloadMethods[index]);
  }

  return (
    <>
      <div className={style.inputWrapper}>
        {payloadMethods.map((obj, index) => (
          <label onClick={() => selectPaymentMethod(index)} className={style.label} key={index}>
            <input value={value} className={style.radio} type="radio" name="cash" />
            <span className={style.fake}></span>
            {obj}
          </label>
        ))}
      </div>
    </>
  );
}

export default SelectPayment;
