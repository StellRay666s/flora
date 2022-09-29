import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import AddButton from "components/AddButton";
import style from "./index.module.scss";

function ProductCard({
  disabled,
  addToCart,
  price = 0,
  title = "Untitle",
  image = "",
  alt = "",
  _id = -0,
}) {
  var base64prefix = "data:image/png;base64, ";
  const cart = useSelector(state => state.cart.data);
  const cartAvailability = cart.filter(boquet => boquet.product._id === _id);

  return (
    <div className={style.wrapper}>
      <div className={style.cartWrapper}>
        <div className={style.imgBorder}>
          <div className={style.border}>
            <Link to={`/product/${_id}`}>
              <img src={base64prefix + image} alt={alt} className={style.img} />
            </Link>
          </div>
        </div>
        <div className={style.title}>{title}</div>
        <span className={style.price}>{price} ₽</span>
        <div className={style.addBusket}>
          <AddButton disabled={disabled} onClick={() => addToCart(_id)} />
          {cartAvailability.length === 0 ? <p>Добавить в корзину</p> : <p>Добавлено в козину</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
