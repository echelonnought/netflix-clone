import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import "normalize.css";
import App from "./App";
import { firebase } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
    </FirebaseContext.Provider>
    
  </>,
  document.getElementById("root")
);

reportWebVitals();
