import  React from "react";
import { Container } from 'semantic-ui-react';

import AppBar from "./AppBar";

export default class Layout extends React.Component {
  render() {
    return (
      <Container>
        <AppBar />
        {this.props.children}
      </Container>
    );
  }
}
