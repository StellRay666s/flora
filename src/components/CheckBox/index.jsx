import React from "react";
import style from "./CheckBox.module.scss";

export default function CheckBox() {
  return (
    <>
      <div className={style.radio}>
        <label>
          <input type="radio" name="methodPayment" />
          <span className={style.fake}></span>
          <span className={style.text}>Наличные</span>
        </label>
        <label>
          <input type="radio" name="methodPayment" />
          <span className={style.fake}></span>
          <span className={style.text}>ApplePay</span>
        </label>
        <label>
          <input type="radio" name="methodPayment" />
          <span className={style.fake}></span>
          <span className={style.text}>Банковская карта</span>
        </label>
      </div>
    </>
  );
}
