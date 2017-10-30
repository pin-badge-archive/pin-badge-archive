import { Location } from "history";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import React from "react";
import { Redirect } from "react-router-dom";

import Button from "components/Button";
import { Symbol, WordMark } from "components/Logo";

import AuthStore from "../AuthStore";

class SignIn extends React.Component {
  render() {
    if (this.props.authStore.isLoggedIn) {
      const params = new URLSearchParams(this.props.location.search);
      return <Redirect to={params.get("redirect") || "/"} />;
    }

    return (
      <div>
        <button
          buttonSize="LARGE"
          color={this.props.theme.white}
          hoverColor={this.props.theme.white}
          backgroundColor={this.props.theme.orange100}
          backgroundHoverColor={this.props.theme.orange80}
          onClick={this.props.authStore.login}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default withTheme(SignIn);
