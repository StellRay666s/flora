import React from "react";
import style from "./index.module.scss";
import plus from "icons/Plus";

function Plus() {
  return (
    <>
      <img className={style.svg} src={plus} />
    </>
  );
}

export default Plus;
