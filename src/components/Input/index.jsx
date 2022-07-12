import React, { Fragment } from "react";

import styles from "./index.module.scss";

function Input({ placeholder }) {
  return (
    <Fragment>
      <input className={styles.inputs} placeholder={placeholder} />
    </Fragment>
  );
}

export default Input;
