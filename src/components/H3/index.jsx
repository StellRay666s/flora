import React from "react";
import style from "./index.module.scss";

const H3 = ({ value }) => {
  return (
    <>
      <h3 className={style.H1}>{value}</h3>
    </>
  );
};

export default H3;
