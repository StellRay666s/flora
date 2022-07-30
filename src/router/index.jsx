import React, { Fragment } from "react";

/** React Router Dom */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/** Pages */
import IndexPage from "pages/home";

export default function Router() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
