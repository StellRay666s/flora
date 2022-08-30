import React from "react";
import Plus from "icons/Plus";
import style from "./index.module.scss";

function AddButton({ onClick = () => {} }) {
  return (
    <button title="Add" aria-label="Add" onClick={onClick} className={style.svgWrapper}>
      <Plus />
    </button>
  );
}

export default AddButton;
