import React from "react";
import ReactDOM from "react-dom/client";

/** App */
import App from "./App";

/** Styles */
import "styles/global.scss";
import "styles/reset.css";
import "styles/variables.scss";

/** Redux */
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
