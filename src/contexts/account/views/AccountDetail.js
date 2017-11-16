import { inject, observer } from "mobx-react";
import React from "react";

import { Layout } from 'app';

@inject('authStore')
@observer
class AccountDetail extends React.Component {
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

export default AccountDetail;
