import React, { Fragment } from "react";
import style from "./index.module.scss";

import { TruckIcon, BoqueteIcon, CreditCartIcon, GiftIcon } from "icons";

import {
  Header,
  H1,
  Button,
  Advantages,
  CatalogBlock,
  AboutUs,
  OrderGuideComponent,
  Footer,
  CatalogBlok,
} from "components";

import MainLayout from "layouts/MainLayout";

export default function IndexPage() {
  return (
    <Fragment>
      <MainLayout>
        <div className={style.navbar}>
          <Header />
          <div className={style.title_text_btn}>
            <h1 className={style.title}>
              <H1>FLOWER STUDIO</H1>
            </h1>
            <p className={style.text}>
              Доставляем цветы круглосуточно, зная только номер мобильного телефона. Если
              опоздаем-цветы в подарок! Если не понравится букет-мы его бесплатно поменяем
            </p>
            <div className={style.btn}>
              <Button className={"buttonOrder"}>ЗАКАЗАТЬ</Button>
            </div>
          </div>
        </div>
        <div className={style.advahtages}>
          <Advantages>
            {" "}
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
            <div className={style.truck}>
              <GiftIcon fill="black" width={40} height={40} />
              <div>
                <h4>Подарок</h4>
                <span>Оформим бесплатно</span>
              </div>
            </div>
          </Advantages>
        </div>
        <div className={style.catalog}>
          <CatalogBlok />
        </div>
      </MainLayout>
      <div className={style.aboutUs}>
        <AboutUs />
      </div>
      <MainLayout>
        <div className={style.orderGuide}>
          <OrderGuideComponent />
        </div>{" "}
      </MainLayout>
      <div className={style.footer}>
        <Footer />
      </div>
    </Fragment>
  );
}
