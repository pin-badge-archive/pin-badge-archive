import React from "react";
import { Route, Switch } from "react-router-dom";
import { Routes as SurveyRoutes } from "../contexts/survey";
import { Routes as SalesRoutes } from "../contexts/sales";
import { Routes as ArchiveRoutes } from "../contexts/archive";
import { Routes as AccountRoutes } from "../contexts/account";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Landing from "./components/Landing";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/surveys" component={SurveyRoutes} />
        <Route path="/sales" component={SalesRoutes} />
        <Route path="/archives" component={ArchiveRoutes} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <PrivateRoute path="/account" component={AccountRoutes} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
