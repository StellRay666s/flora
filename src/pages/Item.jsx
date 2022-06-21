import React from 'react';
import ShemWork from '../Components/ShemWork';

function Item() {
  return (
    <>
      <div className="itemWraper">
        <div className="itemcart">
          <h1>Букет в горшке</h1>
          <h2>ТЮЛЬПАНЫ И РОМАШКИ</h2>
          <span>1 200 руб.</span>
          <h3>Информация</h3>
          <p className="infoText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil blanditiis quos quam,
            eligendi aspernatur ad animi non rem quisquam impedit libero corporis. Error, aliquam
            voluptatem dolorem aspernatur magni consectetur praesentium.
          </p>

          <div className="buyAddbtn">
            <button className="buy">Заказать</button>
            <button className="add">Добавить в корзину</button>
          </div>
        </div>
        <div className="itemImage">
          <img src="../flowes/2.jpg" alt="" />
        </div>
      </div>
      <ShemWork />
    </>
  );
}

export default Item;
