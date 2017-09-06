import  React from "react";

import AppBar from "./AppBar";

export default class MainLayout extends React.Component {
  render() {
    return (
      <MainWrapper>
        <AppBar />
        {this.props.children}
      </MainWrapper>
    );
  }
}
