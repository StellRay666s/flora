import React from "react";
import Circle2 from "assets/gif/Circle2.gif";
import style from "./index.module.scss";

function Loading() {
  return (
    <div className={style.Loading}>
      <img alt="...Загрузка" src={Circle2} />
    </div>
  );
}

export default Loading;
