import React from "react";
import style from "./index.module.scss";
import { TruckIcon, BoqueteIcon, CreditCartIcon, GiftIcon } from "icons";

function Advantages({ children }) {
  return <div className={style.advantaWrapper}>{children}</div>;
}

export default Advantages;
