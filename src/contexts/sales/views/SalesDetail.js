import { inject, observer } from "mobx-react";
import React from "react";

import { Layout } from 'app';

@inject('authStore')
@observer
class SalesDetail extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          SalesDetail {this.props.match.params.id}
        </div>
      </Layout>
    );
  }
}

export default SalesDetail;
