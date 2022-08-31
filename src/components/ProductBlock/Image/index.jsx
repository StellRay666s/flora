import React from "react";
import Rating from "components/Rating";

import style from "./index.module.scss";

function ImageItem({ width, height, img }) {
  return (
    <div className={style.wrapper}>
      <div className={style.border}>
        <div className={style.image}>
          <img src={img} alt="изображение товара" />
        </div>
      </div>{" "}
      <div className={style.rating_sizes}>
        <div className={style.sizes}>
          <span>Высота-{height} см</span>
          <span>Ширина-{width} см</span>
        </div>
        <Rating />
      </div>
    </div>
  );
}

export default ImageItem;
