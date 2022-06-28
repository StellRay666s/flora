import React from "react";
import ReactDOM from "react-dom/client";

/** App */
import App from "./App";

/** Styles */
import "styles/global.scss";
import "styles/reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
