import React, { Fragment } from "react";

/** React Router Dom */
import { Route, Routes, useLocation } from "react-router-dom";

/** Pages */
import {
  IndexPage,
  CartPage,
  ProductPage,
  AuthorizationPage,
  RegistrationPage,
  OrderPage,
} from "pages";

import { fetchCartData } from "redux/slices/cartSlice";
import { useDispatch } from "react-redux";

export default function Router() {
  let location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCartData());
  }, [location]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders/:_id" element={<OrderPage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Fragment>
  );
}
