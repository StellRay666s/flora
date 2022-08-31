import React from "react";
import style from "./index.module.scss";
import MainLayout from "layouts/MainLayout";

import Button from "components/Button";
import CartItem from "components/CartItem";
import H2 from "components/H2";
import H3 from "components/H3";
import Header from "components/Header";
import Input from "components/Input";
import PhoneInput from "components/PhoneInput";
import SelectPayment from "components/SelectPayment";
import Switch from "components/Switch";

function CartPage() {
  return (
    <MainLayout>
      <div className={style.navbar}>
        <Header />
      </div>
      <div className={style.wrapper}>
        <div className={style.user_info}>
          <div className={style.title}>
            <H2>ОФОРМЛЕНИЕ ЗАКАЗА</H2>{" "}
          </div>

          <div className={style.user}>
            <Input style={2} value="Danila" />
            <PhoneInput style={2} value="79999999999" />
            <Input style={2} value="danila@yandex.ru" />
            <Input style={2} value="Москва" />
          </div>

          <div className={style.more}>
            {" "}
            <H3>Дополнительно</H3>
            <Switch />
          </div>
          <div className={style.payment}>
            <H3>Выберите способо оплаты</H3>
            <SelectPayment />
          </div>
          <Button className={"buttonOrderProd"}>Оформить</Button>
        </div>
        <div className={style.order_info}>
          <div className={style.title}>
            {" "}
            <H2>ВАША КОРЗИНА</H2>
          </div>
          <div className={style.order_product}>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className={style.total_price}>
            <div className={style.all}>
              <div className={style.title_price}>Всего</div>
              <div className={style.price}>6 800</div>
            </div>
            <div className={style.all}>
              <div className={style.title_price}>Доставка</div>
              <div className={style.price}>0</div>
            </div>
            <div className={style.all}>
              <div className={style.title_price}>Скидка</div>
              <div className={style.price}>1 110</div>
            </div>
            <div className={style.summary}>
              <div className={style.title_price}>Итог:</div>
              <div className={style.price}>1 110</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CartPage;
