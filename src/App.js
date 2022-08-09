import React, { Fragment } from "react";

/** Redux */
import { Provider } from "react-redux";
import { store } from "redux/store";

/** Routing */
import Router from "router";
import { postAutentication } from "requests/postAutentication";

function App() {
  postAutentication();
  return (
    <Provider store={store}>
      <Fragment>
        <Router />
      </Fragment>
    </Provider>
  );
}

export default App;
