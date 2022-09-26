import React from "react";
import style from "./index.module.scss";
import flower from "assets/images/flower.png";

function Product({ title = "Название", img = flower, alt = "Изображение цветов" }) {
  var base64prefix = "data:image/png;base64, ";

  return (
    <div className={style.item}>
      <div className={style.image}>
        <img src={base64prefix + img} alt={alt} />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  );
}

export default Product;
