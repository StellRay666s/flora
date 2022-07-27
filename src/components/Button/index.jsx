import React from "react";
import style from "./index.module.scss";

function Button({ text, classBtn }) {
  return (
    <>
      <button className={classBtn}>{text}</button>
    </>
  );
}

export default Button;
