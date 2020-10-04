import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Result from "../components/result";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={Result} />
    </Switch>
  );
};

export default Router;
