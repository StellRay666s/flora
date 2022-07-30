import React from "react";
import style from "./index.module.scss";

import PaymentSystemsImage from "assets/images/paymentSystem.png";

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
