import React from "react";
import { ThanksPurchase } from "../components";

function Busket() {
  const [swipe, setSwipe] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const swipeON = () => {
    setSwipe(!swipe);
  };

  const buyOn = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="busketWrapper">
        <div className="orderWrapperBlock">
          <h1>ОФОРМИТЬ ЗАКАЗ</h1>
          <div className="orderBlock">
            <input type="text" placeholder="Ваше имя" />
            <input type="text" placeholder="+ 7 (...)... ..." />
            <input type="text" placeholder="Email:" />
            <input type="text" placeholder="Дата доставки" />
            <input type="text" placeholder="Адресс доставки" />
          </div>
          <div className="payment">
            <h3>Дополнительно</h3>
            {swipe ? (
              <div onClick={() => swipeON()} className="switch-btn"></div>
            ) : (
              <div onClick={() => swipeON()} className="switch-btn switch-on"></div>
            )}
            <h3>Выберите способ оплаты</h3>
            <div className="inpRadio">
              <label htmlFor="">
                <input type="radio" name="cash" checked /> Налик
              </label>
              <label htmlFor="">
                <input type="radio" name="cash" />
                Apple pay
              </label>
              <label htmlFor="">
                <input type="radio" name="cash" />
                Карточка при получении
              </label>
            </div>
            <button onClick={() => buyOn()}>ОФОРМИТЬ</button>
          </div>
        </div>
        <div className="itemWrapperBlock">
          <h1>ВАША КОРЗИНА</h1>
          <div className="itemBusket">
            <div className="content">
              <img src="" alt="" />
              <div className="titleCount">
                <h3></h3>
                <div className="count">
                  <div className="counts">Кол-во</div>
                  <div className="wrapperBTN">
                    <button className="plus">+</button>
                    <button className="minus">-</button>
                  </div>
                </div>
              </div>
              <div className="price"></div>
            </div>
          </div>
          <div className="totalPrice">
            <div className="titleTotalPrice">
              <li>Всего</li>
              <li>Доставка</li>
              <li>Скидка</li>
              <li>Итого</li>
            </div>
            <div className="tablePrice">
              <li>6800</li>
              <li>0</li>
              <li>1100</li>
              <li>6100</li>
            </div>
          </div>
        </div>
      </div>
      {open ? <ThanksPurchase onBuy={buyOn} /> : ""}
    </>
  );
}

export default Busket;
