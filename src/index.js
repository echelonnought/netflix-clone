import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import "normalize.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);

reportWebVitals();
