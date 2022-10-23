import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink as Anchor } from "react-router-hash-link";
import style from "./index.module.scss";

import Logo from "components/Logo";
import CartButton from "components/CartButton";

import { scrollWithOffset } from "utils/scrollWithOffset";
import { useLocation } from "react-router-dom";

function Header() {
  const isAuth = useSelector(state => state.user.user.isAuth);
  const location = useLocation();
  const scrollPositions =
    location.pathname === "/orders" || location.pathname === "/cart" ? -150 : 75;
  const cart = useSelector(state => state.cart.data);

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.burger_logo}>
        <div className={style.logo}>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>{" "}
        <label onClick={() => setIsOpen(!isOpen)} className={style.burger_menu}>
          <div></div>
          <div></div>
          <div></div>
        </label>
      </div>
      <ul className={isOpen ? style.barList : style.barList_close}>
        <Link to={"/"}>
          <li>Главная</li>
        </Link>
        <Anchor scroll={e => scrollWithOffset(e, 75)} to={"/#catalog"}>
          <li>Каталог</li>
        </Anchor>
        <Anchor scroll={e => scrollWithOffset(e, scrollPositions)} to={"/#aboutUs"}>
          <li>О нас</li>
        </Anchor>
        <Anchor scroll={e => scrollWithOffset(e, scrollPositions)} to={"/#orderGuide"}>
          <li>Как сделать заказ</li>
        </Anchor>
        {isAuth ? (
          <Link to={"/orders"}>
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
        )}{" "}
        {isAuth && <CartButton count={cart.length} />}
      </ul>
    </div>
  );
}

export default Header;
