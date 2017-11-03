import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect, Route } from "react-router-dom";

@inject('authStore')
@observer
class PrivateRoute extends React.Component {
  render() {
    const { authStore, component: Component, ...rest } = this.props;
    const render = (props) => {
      if (authStore.isLoggedIn) {
        return <Component {...props} />;
      }
      return <Redirect to={`/login?redirect=${props.location.pathname}`} />;
    };

    return <Route {...rest} render={render} />;
  }
}

export default PrivateRoute;
