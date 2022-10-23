import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

/** App */
import App from "./App";

/** Styles */
import "styles/reset.css";
import "styles/global.scss";
import "styles/variables.scss";
import "styles/buttons.scss";

import { store } from "redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
