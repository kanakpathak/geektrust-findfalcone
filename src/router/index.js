import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import Result from "../components/result";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={Result} />
      <Route
        component={() => (
          <div style={{ font: "bold", fontSize: "28px" }}>404 Not found </div>
        )}
      />
    </Switch>
  );
};

export default Router;
