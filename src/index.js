import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import GlobalStyle from "./components/Styles/GlobalsStyle";
import Provider from "./contexts/Modal";

import "./assets/fonts/stylesheet.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
    <GlobalStyle />
  </Provider>,
);
