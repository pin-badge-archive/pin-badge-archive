import { inject, observer } from "mobx-react";
import React from "react";

import { Layout } from 'app';

@inject('authStore')
@observer
class AccountList extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          Blah
        </div>
      </Layout>
    );
  }
}

export default AccountList;
