import React from "react";
import style from "./index.module.scss";

function Pagnation({ index = 0, active = 0, swipePage }) {
  return (
    <div
      onClick={() => swipePage(index)}
      className={active === index ? style.pagination_active : style.pagination}
    ></div>
  );
}

export default Pagnation;
