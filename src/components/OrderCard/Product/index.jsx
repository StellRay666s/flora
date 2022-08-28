import React from "react";
import style from "./index.module.scss";

function Product({ title = "название", img, alt = "Изображение цветов" }) {
  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src={img} alt={alt} />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  );
}

export default Product;
