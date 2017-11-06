import  React from "react";
import { Container } from 'semantic-ui-react';

import AppBar from "./AppBar";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
