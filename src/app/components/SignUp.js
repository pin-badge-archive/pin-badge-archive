import { inject, observer } from "mobx-react";
import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Label, Card, Button, Form, Grid, Header, Message } from 'semantic-ui-react'
import { email, password } from "../commands";

import Layout from './Layout';

@inject('authStore')
@observer
class SignUp extends React.Component {
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
    this.emailSignUp = this.emailSignUp.bind(this);
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
  emailSignUp() {
    const { email, password } = this.state;
    this.props.authStore.emailSignUp({ email, password  });
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
                  Sign Up
                </Card.Header>
              </Card.Content>
              <Card.Content>
                <Form size="large">
                  <Form.Field>
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      inverted
                      type="email"
                      name="email"
                      placeholder="E-mail address"
                      onChange={this.setEmail}
                      value={this.state.email}
                    />
                    {
                      !this.state.isEmailValid &&
                      <Label basic color="red" pointing>Please enter a value</Label>
                    }
                  </Form.Field>
                  <Form.Field>
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
                    {
                      !this.state.isPasswordValid &&
                      <Label basic color="red" pointing>Please enter a value</Label>
                    }
                  </Form.Field>
                  <Button
                    secondary
                    fluid
                    size="large"
                    onClick={this.emailSignUp}
                    disabled={!this.state.isEmailValid || !this.state.isPasswordValid}
                  >
                    SignUp
                  </Button>
                </Form>
              </Card.Content>
            </Card>
            <Message>
              Already have an account? <Link to="/login">Login</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default SignUp;
