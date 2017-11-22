import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { useStrict } from "mobx";
import { Provider } from "mobx-react";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import { auth, initializeApp as initializeFirebase } from "firebase";
import 'semantic-ui-css/semantic.min.css';
import './index.css';

import config from "./config";
import AuthStore from "./AuthStore";
import Routes from "./Routes";

export { default as NotFound } from "./components/NotFound";
export { default as Layout } from "./components/Layout";

useStrict(true);

export const FirebaseApp = initializeFirebase(config.firebase);
export const FirebaseAuth = FirebaseApp.auth();
export const FirebaseDb = FirebaseApp.database();
export const FirebaseStorage = FirebaseApp.storage();

const authStore = new AuthStore(auth());

const routerStore = new RouterStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routerStore);

const stores = {
  authStore,
  routerStore,
};

ReactDOM.render(
  <Provider {...stores}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('app')
);
