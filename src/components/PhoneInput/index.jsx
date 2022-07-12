import React from "react";
import InputMask from "react-input-mask";

import style from "./index.module.scss";

export default function PhoneInput() {
  return (
    <InputMask
      mask="+9-999-999-99-99"
      placeholder="+7-999-999-99-99"
      className={style.inputs}
      type="text"
    />
  );
}
