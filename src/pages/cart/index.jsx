import React from "react";
import style from "./index.module.scss";
import MainLayout from "layouts/MainLayout";
import {
  Button,
  CartItem,
  H2,
  H3,
  Header,
  Input,
  PaymentSystems,
  PhoneInput,
  SelectPayment,
  Switch,
} from "components";

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
          <div className={style.user_field}>
            <div className={style.hard_title}>
              {" "}
              <H3>Данные покупателя: </H3>
            </div>
            <div className={style.user}>
              <Input value="Danila" />
              <PhoneInput value="79999999999" />
              <Input value="danila@yandex.ru" />
              <Input value="Москва" />
            </div>
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
