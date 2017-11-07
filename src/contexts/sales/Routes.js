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
          <Route
            path={`${matchedUrl}/individuals`}
            render={() => (
              <SalesList
                trail={[
                  {
                    name: "관제 관리",
                    url: matchedUrl
                  },
                  {
                    name: "관제 현황",
                    url: `${matchedUrl}/individuals`
                  }
                ]}
              />
            )}
          />
          <Route path={`${matchedUrl}/individuals/:id`} component={SalesDetail} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    );
  }
}
