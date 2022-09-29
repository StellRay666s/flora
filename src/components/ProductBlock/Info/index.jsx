import React from "react";
import { useSelector } from "react-redux";

import H1 from "components/H1";
import Button from "components/Button";
import H3 from "components/H3";

import style from "./index.module.scss";

import { useAddToCart } from "hooks/useAddToCart";
import { Link } from "react-router-dom";
import { formatPrice } from "utils/formatPrice";

function InfoItem({
  title = "букет в горшке",
  subTitle = "Тюльпаны и ромашки",
  price,
  description,
  _id,
}) {
  const { addToCart, isButtonDisabled } = useAddToCart();
  const cart = useSelector(state => state.cart.data);
  const isAuth = useSelector(state => state.user.user.isAuth);
  const cartAvailability = cart.filter(boquet => boquet.product._id === _id);

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
        <div className={style.price}>{formatPrice(price)} ₽</div>{" "}
        <div className={style.title_description}>
          <H3>Информация:</H3>
        </div>
        <div className={style.description}>{description}</div>
        <div className={style.buttons}>
          {isAuth === false ? (
            <Button disabled={isButtonDisabled} className={"buttonInCartProd"}>
              {" "}
              <Link to="/registration">Зарегистрироваться</Link>
            </Button>
          ) : (
            <Button
              disabled={isButtonDisabled}
              onClick={() => addToCart(_id)}
              className={"buttonInCartProd"}
            >
              {cartAvailability.length === 0 ? "Добавить в корзину" : "Добавлено в корзину"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default InfoItem;
