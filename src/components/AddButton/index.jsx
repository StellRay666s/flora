import React from "react";
import style from "./index.module.scss";
import Plus from "icons/Plus";

function AddButton() {
  return (
    <div className={style.svgWrapper}>
      <Plus />
    </div>
  );
}

export default AddButton;
