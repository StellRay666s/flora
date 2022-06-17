import React from 'react'
import '../index.scss'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>  
      <header>
          <div><h3>МАГАЗИН СВЕЖИХ ЦВЕТОВ</h3></div>
          <ul>
            <li>Главная</li>
            <li>Каталог</li>
            <li>О нас</li>
            <li>Как сделать заказ</li>
          </ul>
         <Link to = "/busket "> <div className='busketLogo'><img src="../image/busket.svg" alt="Корзина" /></div></Link>
      </header>
      <section className='descriptionBlock'>
        <div className='titleTextButton'>
          <h1>FLOWER STUDIO</h1>
          <p>Доставляем цветы круглосуточно, зная только номер мобильного телефона. Если опаздаем-цветы в подарок! Если не понравится букет, мы его бесплатно поменяем.</p>
          <button>Закать</button>
        </div>
      </section>
      <div className='schemWork'>
       <div className='shems'>
        <img src='../image/truck.svg' />
        <div className='shemtext'>
          <h4>Бесплатная доставка по всему городу</h4>
          <p>от 500 руб</p>
        </div>
       </div>
       <div className='shems'>
        <img src='../image/boquet.svg' />
        <div className='shemtext'>
          <h4>Если опаздаем на 15 минут</h4>
          <p>цветы в подарок</p>
        </div>
       </div>
       <div className='shems'>
        <img src='../image/card.svg' />
        <div className='shemtext'>
          <h4>Безопасное оформление заказа</h4>
          <p>Защита Pay Pal</p>
        </div>
       </div>
       <div className='shems'>
        <img src='../image/gift.svg' />
        <div className='shemtext'>
          <h4>Подарок</h4>
          <p>Оформим бесплатно</p>
        </div>
       </div>
      
      </div>
    </>
  )
}

export default Header