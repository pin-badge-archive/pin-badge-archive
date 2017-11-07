import { inject, observer, Provider } from "mobx-react";
import React from "react";
import { match, Route, Switch } from "react-router-dom";

import { NotFound } from "../../app";

import AccountStore from "./AccountStore";
import AccountService from "./services/AccountService";
import AccountDetail from "./views/AccountDetail";
import AccountList from "./views/AccountList";

export default class Routes extends React.Component {
  render() {
    // const liveControllerApi = new LiveControllerApi(this.props.apiConfig);
    const surveyService = new AccountService();
    const surveyStore = new AccountStore(surveyService);
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
              <AccountList
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
          <Route path={`${matchedUrl}/individuals/:id`} component={AccountDetail} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    );
  }
}
