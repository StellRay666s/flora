import React from "react";
import style from "./index.module.scss";

function Advantages({ children }) {
  return <div className={style.advantaWrapper}>{children}</div>;
}

export default Advantages;
