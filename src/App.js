import React, { Fragment } from "react";
import Notification from "components/Notification";

/** Routing */
import Router from "router";
import { BrowserRouter } from "react-router-dom";

import { useReAuthentication } from "hooks/useReAuthentication";

function App() {
  const reAuth = useReAuthentication();

  reAuth();

  return (
    <BrowserRouter>
      <Notification />
      <Fragment>
        <Router />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
