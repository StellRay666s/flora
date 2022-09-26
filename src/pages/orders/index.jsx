import React from "react";
import style from "./index.module.scss";

import MainLayout from "layouts/MainLayout";

import Header from "components/Header";
import OrderCard from "components/OrderCard";
import H3 from "components/H3";
import { useRequiredAuth } from "hooks/useRequiredAuth";
import { useFetchOrders } from "hooks/useFetchOrders";
import Loading from "components/Loading";

function OrderPage() {
  const requiredAuth = useRequiredAuth();
  const { orders, isLoading } = useFetchOrders();

  requiredAuth();

  return (
    <div>
      <MainLayout>
        <div className={style.header}></div>
        <Header />

        {isLoading ? (
          <div className={style.orders}>
            {" "}
            <div className={style.title}>
              <H3>Заказы</H3>
            </div>
            {orders.length === 0 ? (
              <div className={style.noOrders}>У вас еще нету заказов!</div>
            ) : (
              orders.map(products => (
                <OrderCard
                  key={products._id}
                  count={products.count}
                  paymentMethod={products.paymentMethod}
                  products={products.products}
                  date={products.date}
                />
              ))
            )}
          </div>
        ) : (
          <Loading />
        )}
      </MainLayout>
    </div>
  );
}

export default OrderPage;
