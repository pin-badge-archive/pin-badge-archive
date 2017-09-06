import { Location } from "history";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import * as React from "react";
import { Redirect } from "react-router-dom";

import Button from "components/Button";
import { Symbol, WordMark } from "components/Logo";
import styled, { clearfix, ThemeInterface, withTheme } from "lib/styled";

import AuthStore from "../models/AuthStore";

const background = require("./assets/background.jpg");
const LoginPage = styled.div`
  ${clearfix} display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: ${props => props.theme.white};
  background: url(${background}) no-repeat 50% 50% /cover;
`;

const WordMarkWrapper = styled.div`
  margin-top: 21px;
  margin-bottom: 42px;
`;

interface SignInProps {
  authStore?: AuthStore;
  location: Location;
  theme: ThemeInterface;
}

class SignIn extends React.Component {
  render() {
    if (this.props.authStore.isLoggedIn) {
      const params = new URLSearchParams(this.props.location.search);
      return <Redirect to={params.get("redirect") || "/"} />;
    }

    return (
      <LoginPage>
        <Symbol />
        <WordMarkWrapper>
          <WordMark />
        </WordMarkWrapper>
        <Button
          buttonSize="LARGE"
          color={this.props.theme.white}
          hoverColor={this.props.theme.white}
          backgroundColor={this.props.theme.orange100}
          backgroundHoverColor={this.props.theme.orange80}
          onClick={this.props.authStore.login}
        >
          로그인
        </Button>
      </LoginPage>
    );
  }
}

export default withTheme(SignIn);
