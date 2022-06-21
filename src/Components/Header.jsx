import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ShemWork from './ShemWork';
import { Link as Scroll } from 'react-scroll';

function Header() {
  return (
    <>
      <header>
        <div>
          <h3>МАГАЗИН СВЕЖИХ ЦВЕТОВ</h3>
        </div>
        <ul>
          <li>Главная</li>
          <li>
            <Scroll to="Catalog" spy={true} smooth={true} offset={-70} duration={500}>
              Каталог
            </Scroll>
          </li>
          <li>
            {' '}
            <Scroll to="AboutUs" spy={true} smooth={true} offset={-70} duration={500}>
              {' '}
              О нас
            </Scroll>
          </li>
          <li>
            <Scroll to="HowDelevery" spy={true} smooth={true} offset={-70} duration={500}>
              Как сделать заказ
            </Scroll>{' '}
          </li>
          <Link to="/auth">
            <li>Авторизация</li>
          </Link>
          <Link to="/registration">
            <li>Регистрация</li>
          </Link>
        </ul>
        <Link to="/busket">
          {' '}
          <div className="busketLogo">
            <img src="../image/busket.svg" alt="Корзина" />
          </div>
        </Link>
      </header>
      <section className="descriptionBlock">
        <div className="titleTextButton">
          <h1>FLOWER STUDIO</h1>
          <p>
            Доставляем цветы круглосуточно, зная только номер мобильного телефона. Если
            опаздаем-цветы в подарок! Если не понравится букет, мы его бесплатно поменяем.
          </p>
          <button>Закать</button>
        </div>
      </section>
      <ShemWork />
      <Outlet />
    </>
  );
}

export default Header;
