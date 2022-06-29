import React from "react";
import style from "./phoneinput.module.scss";
import InputMask from "react-input-mask";

export default function index() {
  return (
    <div>
      <InputMask
        mask="+9-999-999-99-99"
        placeholder="+7-999-999-99-99"
        className={style.inputs}
        type="text"
      />
    </div>
  );
}
