import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { List } from "semantic-ui-react";
import React from "react";

import { Layout } from '../../../app';

@inject('authStore')
@observer
class SalesList extends React.Component {
  render() {
    const { match: { url } } = this.props;
    return (
      <Layout>
        <div>
          SalesList
          <List>
            <List.Item><Link to={`${url}/1`}>Item 1</Link></List.Item>
            <List.Item><Link to={`${url}/2`}>Item 2</Link></List.Item>
            <List.Item><Link to={`${url}/3`}>Item 3</Link></List.Item>
          </List>
        </div>
      </Layout>
    );
  }
}

export default SalesList;
