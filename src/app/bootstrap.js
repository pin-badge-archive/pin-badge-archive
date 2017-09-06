import { auth, initializeApp as initializeFirebase } from "firebase";
import { createBrowserHistory } from "history";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router } from "react-router";

import config from "./config";
import AuthStore from "./models/AuthStore";
import Routes from "./Routes";

useStrict(true);

initializeFirebase(config.firebase);
const provider = new auth.GoogleAuthProvider();
const authStore = new AuthStore(auth(), provider);

const routerStore = new RouterStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

const stores = {
  authStore,
  routerStore
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById("app")
);
