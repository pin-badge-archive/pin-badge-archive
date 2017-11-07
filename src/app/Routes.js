import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouterStore } from "mobx-react-router";
import { Routes as SurveyRoutes } from "../contexts/survey";
import { Routes as SalesRoutes } from "../contexts/sales";
import { Routes as ArchiveRoutes } from "../contexts/archive";
import { Routes as AccountRoutes } from "../contexts/account";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Landing from "./components/Landing";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/surveys" component={SurveyRoutes} />
        <PrivateRoute path="/sales" component={SalesRoutes} />
        <PrivateRoute path="/archives" component={ArchiveRoutes} />
        <PrivateRoute path="/account" component={AccountRoutes} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
