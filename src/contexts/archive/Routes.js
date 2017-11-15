import { inject, observer, Provider } from "mobx-react";
import React from "react";
import { match, Route, Switch } from "react-router-dom";

import { NotFound } from "../../app";

import ArchiveStore from "./ArchiveStore";
import ArchiveService from "./services/ArchiveService";
import ArchiveDetail from "./views/ArchiveDetail";
import ArchiveList from "./views/ArchiveList";

export default class Routes extends React.Component {
  render() {
    // const liveControllerApi = new LiveControllerApi(this.props.apiConfig);
    const surveyService = new ArchiveService();
    const surveyStore = new ArchiveStore(surveyService);
    const stores = {
      surveyStore,
    };

    const matchedUrl = this.props.match.url;
    console.log(matchedUrl);
    
    return (
      <Provider {...stores}>
        <Switch>
          <Route exact path={matchedUrl} component={ArchiveList} />
          <Route path={`${matchedUrl}/:id`} component={ArchiveDetail} />
          <Route component={NotFound} />
        </Switch>
      </Provider>
    );
  }
}
