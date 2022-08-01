import React from "react";
import style from "./index.module.scss";
import Plus from "icons/Plus";

function AddButton({ onClick = () => {} }) {
  return (
    <button title="Add" aria-label="Add" onClick={onClick} className={style.svgWrapper}>
      <Plus />
    </button>
  );
}

export default AddButton;
