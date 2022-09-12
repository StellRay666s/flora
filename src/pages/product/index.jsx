import React from "react";
import style from "./index.module.scss";
import MainLayout from "layouts/MainLayout";

import Info from "components/ProductBlock/Info";
import Image from "components/ProductBlock/Image";

import Advantages from "components/Advantages";
import Footer from "components/Footer";
import H3 from "components/H3";
import Header from "components/Header";
import ProductCard from "components/ProductCard";

import TruckIcon from "icons/TruckIcon";
import BoqueteIcon from "icons/BoqueteIcon";
import CreditCartIcon from "icons/CreditCartIcon";

import { useFetchProduct } from "hooks/useFetchProduct";

function ProductPage() {
  const { product } = useFetchProduct();

  return (
    <>
      <MainLayout>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.product_wrapper}>
          <Info
            _id={product._id}
            title={product.title}
            price={product.price}
            subTitle={product.subTitle}
            description={product.description}
          />
          <Image
            rating={product.rating}
            img={product.image}
            width={product.width}
            height={product.height}
          />
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
      <Footer />
    </>
  );
}

export default ProductPage;
