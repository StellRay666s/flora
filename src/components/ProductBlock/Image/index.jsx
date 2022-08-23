import { Rating } from "components";
import React from "react";
import style from "./index.module.scss";

function ImageItem() {
  return (
    <div className={style.wrapper}>
      <div className={style.border}>
        <div className={style.image}>
          <img src="#" alt="изображение товара" />
        </div>
      </div>{" "}
      <div className={style.rating_sizes}>
        <div className={style.sizes}>
          <span>Высота-25 см</span>
          <span>Ширина-30 см</span>
        </div>
        <Rating />
      </div>
    </div>
  );
}

export default ImageItem;
