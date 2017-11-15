import { inject, observer, Provider } from "mobx-react";
import React from "react";
import { match, Route, Switch } from "react-router-dom";

import { NotFound } from "../../app";

import SalesStore from "./SalesStore";
import SalesService from "./services/SalesService";
import SalesDetail from "./views/SalesDetail";
import SalesList from "./views/SalesList";

export default class Routes extends React.Component {
  render() {
    // const liveControllerApi = new LiveControllerApi(this.props.apiConfig);
    const surveyService = new SalesService();
    const surveyStore = new SalesStore(surveyService);
    const stores = {
      surveyStore,
    };

    const matchedUrl = this.props.match.url;
    console.log(matchedUrl);
    
    return (
      <Provider {...stores}>
        <Switch>
          <Route exact path={matchedUrl} component={SalesList} />
          <Route path={`${matchedUrl}/:id`} component={SalesDetail} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    );
  }
}
