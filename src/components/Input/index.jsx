import React, { Fragment } from "react";

import styles from "./index.module.scss";

function Input({ placeholder, value, dispatchValue }) {
  /**
   * Change handler
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  function onChange(e) {
    dispatchValue(e.target.value);
  }

  return (
    <Fragment>
      <input value={value} onChange={onChange} className={styles.input} placeholder={placeholder} />
    </Fragment>
  );
}

export default Input;
