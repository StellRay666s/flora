import React, { Fragment } from "react";
import Notification from "components/Notification";

/** Redux */
import { Provider } from "react-redux";
import { store } from "redux/store";

/** Routing */
import Router from "router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Notification />
        <Fragment>
          <Router />
        </Fragment>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
