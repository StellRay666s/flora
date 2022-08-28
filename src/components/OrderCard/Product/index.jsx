import React from "react";
import style from "./index.module.scss";

function Product({ title = "название", image }) {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src="#" />
      </div>
      <div className={style.title}>Ромашки</div>
    </div>
  );
}

export default Product;
