import React, { Fragment } from "react";
import { HashLink as Anchor } from "react-router-hash-link";
import style from "./index.module.scss";

import TruckIcon from "icons/TruckIcon";
import BoqueteIcon from "icons/BoqueteIcon";
import CreditCartIcon from "icons/CreditCartIcon";
import GiftIcon from "icons/GiftIcon";

import Header from "components/Header";
import H1 from "components/H1";
import Button from "components/Button";
import Advantages from "components/Advantages";
import CatalogBlock from "components/CatalogBlok";
import AboutUs from "components/AboutUs";
import OrderGuideComponent from "components/OrderGuideComponent";
import Footer from "components/Footer";
import { useFetchBouquets } from "hooks/useFetchBouquets";
import { scrollWithOffset } from "utils/scrollWithOffset";

import MainLayout from "layouts/MainLayout";

export default function IndexPage() {
  const { bouquets, isLoading } = useFetchBouquets();

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
              <Anchor to={"/#orderGuide"} scroll={e => scrollWithOffset(e, 75)}>
                <Button className={"buttonOrder"}>ЗАКАЗАТЬ</Button>
              </Anchor>
            </div>
          </div>
        </div>
        <div className={style.advahtages}>
          <Advantages className={"advantaWrapper"}>
            <div className={style.truck}>
              <TruckIcon fill="black" width={40} height={40} />
              <div className={style.title_description}>
                <h4>Бесплатная доставка по всему городу</h4>
                <span>от 500 ₽</span>
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
        <div id="catalog" className={style.catalog}>
          <CatalogBlock data={bouquets} isLoading={isLoading} />
        </div>
      </MainLayout>
      <div id="aboutUs" className={style.aboutUs}>
        <AboutUs />
      </div>
      <MainLayout>
        <div id="orderGuide" className={style.orderGuide}>
          <OrderGuideComponent />
        </div>
      </MainLayout>
      <div className={style.footer}>
        <Footer />
      </div>
    </Fragment>
  );
}
