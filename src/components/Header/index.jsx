import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import Logo from "components/Logo";
import CartButton from "components/CartButton";
import { useSelector } from "react-redux";

import style from "./index.module.scss";

function Header() {
  const { isAuth } = useSelector(store => store.user.user);

  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <ul className={style.barList}>
        <Scroll>
          <li>Главная</li>
        </Scroll>
        <Scroll>
          <li>Каталог</li>
        </Scroll>
        <Scroll>
          <li>О нас</li>
        </Scroll>
        <Scroll>
          <li>Как сделать заказы</li>
        </Scroll>

        {isAuth ? (
          <Link to={"order/:_id"}>
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
      <CartButton />
    </div>
  );
}

export default Header;
