import { inject, observer, Provider } from "mobx-react";
import React from "react";
import { match, Route, Switch } from "react-router-dom";

import { NotFound } from "../../app";

import SurveyStore from "./SurveyStore";
import SurveyService from "./services/SurveyService";
import SurveyDetail from "./views/SurveyDetail";
import SurveyList from "./views/SurveyList";

export default class Routes extends React.Component {
  render() {
    // const liveControllerApi = new LiveControllerApi(this.props.apiConfig);
    const surveyService = new SurveyService();
    const surveyStore = new SurveyStore(surveyService);
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
              <SurveyList
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
          <Route path={`${matchedUrl}/individuals/:id`} component={SurveyDetail} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    );
  }
}
