import React from "react";
import style from "./index.module.scss";

function Radio() {
  const payloadMethod = ["Наличными", "Apple Pay", "Банковская карта"];

  return (
    <>
      <div className={style.inputWrapper}>
        {payloadMethod.map((obj, index) => (
          <label className={style.label} key={index}>
            {" "}
            <input
              onClick={() => console.log(index)}
              className={style.radio}
              type="radio"
              name="cash"
            />
            <span className={style.fake}></span>
            {obj}
          </label>
        ))}
      </div>
    </>
  );
}

export default Radio;