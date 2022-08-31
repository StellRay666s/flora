import React from "react";
import style from "./index.module.scss";

import MainLayout from "layouts/MainLayout";

import Header from "components/Header";
import OrderCard from "components/OrderCard";
import H3 from "components/H3";

function OrderPage() {
  return (
    <div>
      <MainLayout>
        <div className={style.header}></div>
        <Header />

        <div className={style.order}>
          {" "}
          <div className={style.title}>
            <H3>Заказы</H3>
          </div>
          <OrderCard />
        </div>
      </MainLayout>
    </div>
  );
}

export default OrderPage;
