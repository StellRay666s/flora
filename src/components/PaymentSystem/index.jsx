import React from "react";
import style from "./index.module.scss";
import paymentLogo from "../../icons/paymentSystem.png";

function PaymentSystem() {
  return (
    <>
      <img
        alt="Системы платежей"
        title="Системы платежей"
        className={style.img}
        src={paymentLogo}
      />
    </>
  );
}

export default PaymentSystem;
