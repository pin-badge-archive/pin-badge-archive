import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Card, Button, Form, Grid, Header, Message, Divider, Icon } from 'semantic-ui-react'
import { email, password } from "../commands";

import Layout from './Layout';

@inject('authStore')
@observer
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValid: false,
      password: '',
      isPasswordValid: false,
    };
    this.setEmail = this.setEmail.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.emailLogin = this.emailLogin.bind(this);
  }
  setEmail(event) {
    const { target: { value } } = event;
    this.setState({
      email: value,
      isEmailValid: email(value),
    });
  }
  setPassword(event) {
    const { target: { value } } = event;
    this.setState({
      password: value,
      isPasswordValid: password(value),
    });
  }
  emailLogin() {
    const { email, password } = this.state;
    this.props.authStore.emailLogin({ email, password  });
  }
  render() {
    if (this.props.authStore.isLoggedIn) {
      const params = new URLSearchParams(this.props.location.search);
      return <Redirect to={params.get("redirect") || "/"} />;
    }
    return (
      <Layout>
        <Grid
          textAlign="center"
          style={{ paddingTop: 60, height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" textAlign="center" style={{ padding: 30 }}>
              B ARCHIVE
            </Header>
            <Card fluid>
              <Card.Content>
                <Card.Header>
                  Log In
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Form size="large">
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="E-mail address"
                    type="email"
                    name="email"
                    inverted
                    onChange={this.setEmail}
                    value={this.state.email}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    inverted
                    onChange={this.setPassword}
                    value={this.state.password}
                  />
                  <Button
                    secondary
                    fluid
                    size="large"
                    onClick={this.emailLogin}
                    disabled={!this.state.isEmailValid || !this.state.isPasswordValid}
                  >
                    Login
                  </Button>
                  <Divider horizontal>Or</Divider>
                  <Button color="google plus" onClick={this.props.authStore.googleLogin}>
                    <Icon name="google plus" /> Google Plus
                  </Button>
                  <Button color="twitter" onClick={this.props.authStore.twitterLogin}>
                    <Icon name="twitter" /> Twitter
                  </Button>
                </Form>
              </Card.Content>
            </Card>
            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default Login;
