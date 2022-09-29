import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import { postOrders } from "requests/postOrders";
import { useNotification } from "hooks/useNotification";
import { useRequiredAuth } from "hooks/useRequiredAuth";
import { formatPrice } from "utils/formatPrice";

function CartPage() {
  const notification = useNotification();
  const cart = useSelector(store => store.cart.data);
  const { totalPrice } = useSelector(state => state.cart);
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();
  const requiredAuth = useRequiredAuth();

  const [name, setName] = React.useState(user.name || "");
  const [phone, setPhone] = React.useState(user.phone || "");
  const [email, setEmail] = React.useState(user.email || "");
  const [address, setAddress] = React.useState(user.address || "");
  const [paymentMethod, setPaymentMethod] = React.useState("");

  const products = cart.map(item => ({ count: item.count, _id: item.product._id }));

  async function orderPlacement() {
    const date = new Date();
    try {
      const orderResponse = await postOrders(date, address, paymentMethod, products);
      if (orderResponse.data.id) {
        navigate(`/orders/${orderResponse.data.id}`);
      } else {
        console.error("Miss created order id");
      }
    } catch (err) {
      notification("Ошибка при обработке заказа", "error");
    }
  }

  requiredAuth();

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
            <Input style={2} placeholder={"Введите имя"} dispatchValue={setName} value={name} />
            <PhoneInput style={2} dispatchValue={setPhone} value={phone} />
            <Input style={2} placeholder={"Введите email"} dispatchValue={setEmail} value={email} />
            <Input
              style={2}
              placeholder={"Введите адресс"}
              dispatchValue={setAddress}
              value={address}
            />
          </div>
          <div className={style.payment}>
            <H3>Выберите способо оплаты</H3>
            <SelectPayment setValue={setPaymentMethod} value={paymentMethod} />
          </div>
          <Button disabled={false} onClick={() => orderPlacement()} className={"buttonOrderProd"}>
            Оформить
          </Button>
        </div>
        <div className={style.order_info}>
          <div className={style.title}>
            <H2>ВАША КОРЗИНА</H2>
          </div>
          <div className={style.order_product}>
            {cart
              ? cart.map(products => (
                  <CartItem
                    key={products._id}
                    _id={products._id}
                    title={products.product.title}
                    price={products.price}
                    productId={products.product._id}
                    img={products.product.image}
                    count={products.count}
                  />
                ))
              : ""}
          </div>
          <div className={style.total_price}>
            <div className={style.summary}>
              <div className={style.title_price}>Итог:</div>
              <div className={style.price}>{formatPrice(totalPrice)} ₽</div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default CartPage;
