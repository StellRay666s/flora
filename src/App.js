import React, { Fragment } from "react";
import Notification from "components/Notification";

/** Redux */
import { Provider } from "react-redux";
import { store } from "redux/store";

/** Routing */
import Router from "router";

function App() {
  return (
    <Provider store={store}>
      <Notification />
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
}

export default App;
