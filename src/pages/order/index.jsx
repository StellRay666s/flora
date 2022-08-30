import React from "react";
import style from "./index.module.scss";

import MainLayout from "layouts/MainLayout";
import { Header, OrderCard, H3 } from "components";

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