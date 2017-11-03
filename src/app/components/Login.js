import { Location } from "history";
import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import React from "react";
import { Redirect } from "react-router-dom";
import { Card, Button, Form, Grid, Header, Image, Message, Segment, Divider, Icon } from 'semantic-ui-react'

const loginStyle = {
  paddingTop: 60,
  height: '100%',
};

@inject('authStore')
@observer
class Login extends React.Component {
  render() {
    if (this.props.authStore.isLoggedIn) {
      const params = new URLSearchParams(this.props.location.search);
      return <Redirect to={params.get("redirect") || "/"} />;
    }
    return (
      <Grid
        textAlign='center'
        style={{ paddingTop: 60, height: '100%' }}
        verticalAlign='middle'
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center' style={{ padding: 30 }}>
            B ARCHIVE
          </Header>
          <Card fluid>
            <Card.Content>
              <Card.Header>
                Log In
              </Card.Header>
            </Card.Content>
            <Card.Content>
              <Form size='large'>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  placeholder='E-mail address'
                  inverted
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='Password'
                  type='password'
                  inverted
                />
                <Button secondary fluid size='large'>Login</Button>
                <Divider horizontal>Or</Divider>
                <Button color='google plus' onClick={this.props.authStore.login}>
                  <Icon name='google plus' /> Google Plus
                </Button>
                <Button color='twitter'>
                  <Icon name='twitter' /> Twitter
                </Button>
              </Form>
            </Card.Content>
          </Card>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;
