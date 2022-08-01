import React, { Fragment } from "react";
import Router from "router";

/** Redux */
import { Provider } from "react-redux";
import { store } from "redux/store";

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
}

export default App;
