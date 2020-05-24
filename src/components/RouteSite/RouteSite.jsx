import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";
// import HomePage from "../../pages/HomePage";

// import AboutPage from "../../pages/AboutPage";

// import ErrorPage from "../../pages/ErrorPage";

const RouteSite = () => (
  <Switch>
    {routes.map((route) => (
      <Route key={route.path} {...route} />
    ))}
  </Switch>

  //   <Switch>
  //     <Route path="/" exact component={HomePage} />
  //     <Route path="/about" component={AboutPage} />
  //     <Route component={ErrorPage} />
  //   </Switch>
);

export default RouteSite;
