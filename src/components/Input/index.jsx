import React, { Fragment } from "react";
import styles from "./index.module.scss";

export default function Input({
  placeholder = "",
  value = "",
  dispatchValue = () => {},
  style,
  type = "text",
}) {
  /**
   * Change handler
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function onChange(e) {
    dispatchValue(e.target.value);
  }

  return (
    <Fragment>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={style == 2 ? styles.inputOnCart : styles.input}
        placeholder={placeholder}
      />
    </Fragment>
  );
}
