import React from "react";
import style from "./index.module.scss";

const H1 = ({ value }) => {
  return (
    <>
      <h1 className={style.H1}>{value}</h1>
    </>
  );
};

export default H1;
