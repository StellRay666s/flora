import React from "react";
import style from "./index.module.scss";
import paymentLogo from "../../icons/paymentSystem.png";

function PaymentSystem() {
  return (
    <>
      <img className={style.img} src={paymentLogo} />
    </>
  );
}

export default PaymentSystem;
