import React from "react";
import { useSelector } from "react-redux";

import H1 from "components/H1";
import Button from "components/Button";
import H3 from "components/H3";

import style from "./index.module.scss";

import { useAddToCart } from "hooks/useAddToCart";

function InfoItem({
  title = "букет в горшке",
  subTitle = "Тюльпаны и ромашки",
  price,
  description,
  _id,
}) {
  const { addToCart, isButtonDisabled } = useAddToCart();
  const cart = useSelector(state => state.cart.data);
  const productId = cart.filter(boquet => boquet.product._id === _id);

  return (
    <div>
      {" "}
      <div className={style.block_text_btn}>
        <div className={style.title}>
          {" "}
          <H1>{title.toUpperCase()}</H1>
        </div>
        <div className={style.under_title}>
          {" "}
          <H3>{subTitle}</H3>
        </div>
        <div className={style.price}>{price} руб</div>{" "}
        <div className={style.title_description}>
          <H3>Информация:</H3>
        </div>
        <div className={style.description}>{description}</div>
        <div className={style.buttons}>
          <Button
            disabled={isButtonDisabled}
            onClick={() => addToCart(_id)}
            className={"buttonInCartProd"}
          >
            {productId.length === 0 ? "Добавить в корзину" : "Добавлено в корзину"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
