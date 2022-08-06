import React from "react";
import style from "./index.module.scss";

function H1({ valueБ, children }) {
  return <h1 className={style.H1}>{children}</h1>;
}

export default H1;
