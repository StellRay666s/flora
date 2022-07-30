import React from "react";
import style from "./index.module.scss";

function Button({ children, classBtn = () => {} }) {
  return (
    <>
      <button className={classBtn}>{children}</button>
    </>
  );
}

export default Button;
