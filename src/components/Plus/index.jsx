import React from "react";
import style from "./index.module.scss";
import { Plus } from "icons";

function Plusik() {
  return (
    <>
      <div className={style.svgWrapper}>
        <Plus />
      </div>
    </>
  );
}

export default Plusik;
