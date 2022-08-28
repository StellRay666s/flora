import React, { Fragment } from "react";
import styles from "./index.module.scss";

export default function Input({ placeholder = "", value = "", dispatchValue = () => {}, style }) {
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
        value={value}
        onChange={onChange}
        className={style == 2 ? styles.inputOnCart : styles.input}
        placeholder={placeholder}
      />
    </Fragment>
  );
}
