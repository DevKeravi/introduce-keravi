import React from "react";
import { Route, Switch } from "react-router-dom";
import { Introduce, TechInfo } from "../pages";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Introduce} />
      <Route path="/tech" component={TechInfo} />
    </Switch>
  );
};
export default Router;
