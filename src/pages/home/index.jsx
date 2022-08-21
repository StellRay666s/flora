import React, { Fragment } from "react";
import style from "./index.module.scss";

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
          <Advantages />
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
