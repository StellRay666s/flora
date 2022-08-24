import React, { Fragment } from "react";

/** React Router Dom */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** Pages */
import { IndexPage, CartPage, ProductPage, AuthorizationPage, RegistrationPage } from "pages";

export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:_id" element={<ProductPage />} />
          <Route path="/authorization" element={<AuthorizationPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
