import { inject, observer } from "mobx-react";
import React from "react";

import { Layout } from '../../../app';

@inject('authStore')
@observer
class SalesList extends React.Component {
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

export default SalesList;
