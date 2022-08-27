import React from "react";
import InputMask from "react-input-mask";
import { useParams } from "react-router-dom";

import styles from "./index.module.scss";

export default function PhoneInput({ value = "", dispatchValue = () => {} }) {
  /**
   * Change handler
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function onChange(e) {
    dispatchValue(e.target.value);
  }

  const page = window.location.pathname;

  return (
    <InputMask
      mask="+7 999 999-99-99"
      value={value}
      placeholder="Введите номер телефона"
      onChange={onChange}
    >
      {inputProps => (
        <input
          {...inputProps}
          className={page == "/cart" ? styles.inputOnCart : styles.input}
          type="tel"
        />
      )}
    </InputMask>
  );
}
