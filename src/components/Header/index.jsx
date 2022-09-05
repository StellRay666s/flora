import React from "react";
import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";

import Logo from "components/Logo";
import CartButton from "components/CartButton";
import { useSelector } from "react-redux";

import style from "./index.module.scss";

function Header() {
  const { isAuth } = useSelector(store => store.user.user);

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <ul className={style.barList}>
        <Link to={"/"}>
          <li>Главная</li>
        </Link>

        <Anchor to={"/#catalog"}>
          <li>Каталог</li>
        </Anchor>
        <Anchor to={"/#aboutUs"}>
          <li>О нас</li>
        </Anchor>
        <Anchor to={"/#orderGuide"}>
          <li>Как сделать заказы</li>
        </Anchor>
        {isAuth ? (
          <Link to={"/orders/:_id"}>
            <li>Заказы</li>
          </Link>
        ) : (
          <div className={style.auth}>
            <Link to={"/authorization"}>
              <li>Авторизация</li>
            </Link>
            <Link to={"/registration"}>
              <li>Регистрация</li>
            </Link>
          </div>
        )}
      </ul>

      {isAuth && <CartButton />}
    </div>
  );
}

export default Header;
