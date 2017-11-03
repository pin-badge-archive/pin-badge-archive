import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { RouterStore } from "mobx-react-router";
import { Routes as SurveyRoutes } from "../contexts/survey";

import NotFound from "./components/NotFound";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Layout from './components/Layout';

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Layout>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/surveys" component={SurveyRoutes} />
          <PrivateRoute path="/sales" component={SurveyRoutes} />
          <PrivateRoute path="/archives" component={SurveyRoutes} />
          <Route component={NotFound} />
        </Layout>
      </Switch>
    );
  }
}
