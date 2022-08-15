import React from "react";
import style from "./index.module.scss";

function H2({ children }) {
  return <h2 className={style.H2}>{children}</h2>;
}

export default H2;
