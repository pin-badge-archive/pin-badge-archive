import { Card } from "semantic-ui-react";
import React from "react";

import { Layout } from 'app';
import { SidebarLayout, Pagination, Item } from 'components';

class ArchiveList extends React.Component {
  render() {
    const { match: { url } } = this.props;

    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push(<Item {...this.props} id={i} />);
    }

    return (
      <Layout>
        <SidebarLayout>
          <Card.Group itemsPerRow={5}>
            {items}
          </Card.Group>
          <Pagination />
        </SidebarLayout>
      </Layout>
    );
  }
}

export default ArchiveList;
