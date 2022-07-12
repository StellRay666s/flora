import React from "react";
import InputMask from "react-input-mask";

import style from "./index.module.scss";

export default function PhoneInput({ value, dispatchValue }) {
  /**
   * Change handler
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function onChange(e) {
    dispatchValue(e.target.value);
  }

  return (
    <InputMask mask="+7 999 999-99-99" value={value} onChange={onChange}>
      {inputProps => <input {...inputProps} className={style.inputs} type="tel" />}
    </InputMask>
  );
}
