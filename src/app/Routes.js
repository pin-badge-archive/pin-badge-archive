import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouterStore } from "mobx-react-router";
import { Routes as OperationRoutes } from "contexts/operation";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./components/SignIn";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/signin" component={Welcome} />
        <PrivateRoute path="/about" component={OperationRoutes} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
