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

export default function Router() {
  let location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order/:_id" element={<OrderPage />} />
        <Route path="/product/:_id" element={<ProductPage />} />
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Fragment>
  );
}
