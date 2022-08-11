import React, { Fragment } from "react";
import Notific from "components/Notific";

/** Redux */
import { Provider } from "react-redux";
import { store } from "redux/store";

/** Routing */
import Router from "router";

function App() {
  return (
    <Provider store={store}>
      <Notific />
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
}

export default App;
