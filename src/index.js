import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./assets/styles/style.scss";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename="/">
      <Route component={App} />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
