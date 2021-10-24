import React from "react";
import { Route, Switch } from "react-router-dom";
import { Introduce, TechInfo, Portfolio, Contact } from "../pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Introduce} />
      <Route path="/tech" component={TechInfo} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};
export default Router;
