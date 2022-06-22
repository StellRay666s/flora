import React from "react";

export default function ThanksPurchase({ onBuy }) {
  return (
    <div className="purchaseWrapper">
      <div className="purchase">
        <div className="close" onClick={onBuy}>
          +
        </div>
        <div className="text">
          <h1>Благодарим за покупку</h1>
          <p>Посмотрите пожалуйста почту мы отправили туду информацию о заказе</p>
        </div>

        <div className="itemPurchse">
          <h3>Смотрите также:</h3>
        </div>
      </div>
    </div>
  );
}
