import React from 'react';

function ShemWork() {
  return (
    <div>
      {' '}
      <div className="schemWork">
        <div className="shems">
          <img src="../image/truck.svg" />
          <div className="shemtext">
            <h4>Бесплатная доставка по всему городу</h4>
            <p>от 500 руб</p>
          </div>
        </div>
        <div className="shems">
          <img src="../image/boquet.svg" />
          <div className="shemtext">
            <h4>Если опаздаем на 15 минут</h4>
            <p>цветы в подарок</p>
          </div>
        </div>
        <div className="shems">
          <img src="../image/card.svg" />
          <div className="shemtext">
            <h4>Безопасное оформление заказа</h4>
            <p>Защита Pay Pal</p>
          </div>
        </div>
        <div className="shems">
          <img src="../image/gift.svg" />
          <div className="shemtext">
            <h4>Подарок</h4>
            <p>Оформим бесплатно</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShemWork;
