import  React from "react";

import AppBar from "./AppBar";

export default class MainLayout extends React.Component {
  render() {
    return (
      <div>
        blah
        <AppBar />
        {this.props.children}
      </div>
    );
  }
}
