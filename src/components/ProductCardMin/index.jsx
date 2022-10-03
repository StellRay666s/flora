import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.scss";

function ProductCardMin({ image = "", title = "", _id }) {
  var base64prefix = "data:image/png;base64, ";

  return (
    <>
      <Link to={`/product/${_id}`}>
        <div className={style.cartWrapper}>
          <div className={style.cart}>
            <img src={base64prefix + image} />
            <div className={style.title}> {title}</div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCardMin;
