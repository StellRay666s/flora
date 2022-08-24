import React from "react";
import style from "./index.module.scss";
import MainLayout from "layouts/MainLayout";

import Info from "components/ProductBlock/Info";
import Image from "components/ProductBlock/Image";
import { Advantages, H3, Header, ProductCard } from "components";
import { TruckIcon, BoqueteIcon, CreditCartIcon, GiftIcon } from "icons";

function ProductPage() {
  return (
    <>
      <MainLayout>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.product_wrapper}>
          <Info />
          <Image />
        </div>
      </MainLayout>
      <div className={style.advantages}>
        <Advantages>
          <div className={style.truck}>
            <TruckIcon fill="black" width={40} height={40} />
            <div className={style.title_description}>
              <h4>Бесплатная доставка по всему городу</h4>
              <span>от 500 руб</span>
            </div>
          </div>
          <div className={style.truck}>
            <BoqueteIcon fill="black" width={40} height={40} />
            <div>
              <h4>Если опоздаем на 15 минут</h4>
              <span>Цветы в подарок</span>
            </div>
          </div>
          <div className={style.truck}>
            <CreditCartIcon fill="black" width={40} height={40} />
            <div>
              <h4>Безопасное оформление заказа</h4>
              <span>Защита Pay Pal</span>
            </div>
          </div>
        </Advantages>
      </div>
      <MainLayout>
        <div className={style.others_title}>
          <H3>Смотрите так же наши остальные товары </H3>
        </div>
        <div className={style.wrapper_card}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </MainLayout>
    </>
  );
}

export default ProductPage;
