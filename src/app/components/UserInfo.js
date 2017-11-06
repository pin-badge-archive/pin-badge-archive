import { inject, observer } from "mobx-react";
import React from "react";

// import { DropdownMenu, DropdownMenuItem } from "components/Dropdown";
// import Icon from "components/Icon";

// const UserActionButton = (
//   <UserAction>
//     <Icon name="CARET_SMALL_DOWN" width={12} height={12} />
//   </UserAction>
// );

@inject("authStore", "routerStore")
@observer
export default class UserInfo extends React.Component {
  // userActionMenu = [
  //   {
  //     action: this.props.authStore.logout,
  //     key: shortid.generate(),
  //     name: "로그아웃"
  //   }
  // ];

  render() {
    return (
      <div>
        <p>{this.props.authStore.displayName}</p>
        <p>{this.props.authStore.email.split("@")[0]}</p>
      </div>
    );
  }
}
