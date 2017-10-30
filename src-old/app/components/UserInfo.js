import { inject, observer } from "mobx-react";
import { RouterStore } from "mobx-react-router";
import * as React from "react";

import { DropdownMenu, DropdownMenuItem } from "components/Dropdown";
import Icon from "components/Icon";

import AuthStore from "../models/AuthStore";

const UserActionButton = (
  <UserAction>
    <Icon name="CARET_SMALL_DOWN" width={12} height={12} />
  </UserAction>
);

export default class UserInfo extends React.Component {
  userActionMenu = [
    {
      action: this.props.authStore.logout,
      key: shortid.generate(),
      name: "로그아웃"
    }
  ];

  render() {
    return (
      <UserInfoWrapper>
        <DisplayName>{this.props.authStore.displayName}</DisplayName>
        <Email>{this.props.authStore.email.split("@")[0]}</Email>
        <UserActionMenu
          menu={this.userActionMenu}
          toggleButton={UserActionButton}
          horizontalLocation="right"
        />
      </UserInfoWrapper>
    );
  }
}
