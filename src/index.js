import React from "react";
import ReactDOM from "react-dom/client";

/** App */
import App from "./App";

/** Styles */
import "styles/reset.css";
import "styles/global.scss";
import "styles/variables.scss";
import "styles/buttons.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
