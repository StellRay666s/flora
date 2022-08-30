import React from "react";
import { Link } from "react-scroll";
import Logo from "components/Logo";
import CartButton from "components/CartButton";

import style from "./index.module.scss";

function Header() {
  return (
    <div className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <ul className={style.barList}>
        <Link>
          <li>Главная</li>
        </Link>
        <Link>
          <li>Каталог</li>
        </Link>
        <Link>
          <li>О нас</li>
        </Link>
        <Link>
          <li>Как сделать заказы</li>
        </Link>

        <Link>
          <li>Заказы</li>
        </Link>
      </ul>
      <CartButton />
    </div>
  );
}

export default Header;
