import React from "react";
import Rating from "components/Rating";

import style from "./index.module.scss";

function ImageItem({ width, height, img, rating }) {
  var base64prefix = "data:image/png;base64, ";

  return (
    <div className={style.wrapper}>
      <div className={style.border}>
        <div className={style.image}>
          <img src={base64prefix + img} alt="изображение товара" />
        </div>
      </div>{" "}
      <div className={style.rating_sizes}>
        <div className={style.sizes}>
          <span>Высота-{height} см</span>
          <span>Ширина-{width} см</span>
        </div>
        <Rating rating={rating} />
      </div>
    </div>
  );
}

export default ImageItem;
