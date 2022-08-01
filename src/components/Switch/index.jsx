import React from "react";
import style from "./index.module.scss";

function Switch({ value = false, setValue = () => {} }) {
  function onClick() {
    setValue(!value);
  }

  return (
    <>
      <div className={style.switchWrapper}>
        <div onClick={onClick} className={value ? style.switch : style.switchOn}></div>
      </div>
    </>
  );
}

export default Switch;
