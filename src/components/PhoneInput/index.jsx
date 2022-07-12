import React from "react";
import InputMask from "react-input-mask";

import styles from "./index.module.scss";

export default function PhoneInput({ value, dispatchValue }) {
  /**
   * Change handler
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function onChange(e) {
    dispatchValue(e.target.value);
  }

  return (
    <InputMask
      mask="+7 999 999-99-99"
      value={value}
      placeholder="Введите номер телефона"
      onChange={onChange}
    >
      {inputProps => <input {...inputProps} className={styles.input} type="tel" />}
    </InputMask>
  );
}
