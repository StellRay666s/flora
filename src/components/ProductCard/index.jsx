import React from "react";
import { Link } from "react-router-dom";
import AddButton from "components/AddButton";

import style from "./index.module.scss";

function ProductCard({ price = 0, title = "Untitle", image = "", alt = "", id = -0 }) {
  var base64prefix = "data:image/png;base64, ";

  return (
    <Link to={`/product/${id}`}>
      <div className={style.wrapper}>
        <div className={style.cartWrapper}>
          <div className={style.imgBorder}>
            <div className={style.border}>
              <img src={base64prefix + image} alt={alt} className={style.img} />
            </div>
          </div>
          <div className={style.title}>{title}</div>
          <span className={style.price}>{price} руб.</span>
          <div className={style.addBusket}>
            <AddButton />
            <p>Добавить в корзину</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
