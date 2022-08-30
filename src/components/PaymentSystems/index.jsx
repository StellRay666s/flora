import React from "react";

import PaymentSystemsImage from "assets/images/paymentSystem.png";

import style from "./index.module.scss";

function PaymentSystems() {
  return (
    <img
      alt="Системы платежей"
      title="Системы платежей"
      className={style.img}
      src={PaymentSystemsImage}
    />
  );
}

export default PaymentSystems;
