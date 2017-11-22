import { Card } from "semantic-ui-react";
import React from "react";
import { inject, observer } from "mobx-react";

import { Layout } from 'app';
import { SidebarLayout, Pagination, Item } from 'components';

@inject('surveyStore')
@observer
class SurveyList extends React.Component {
  render() {
    const { match: { url } } = this.props;

    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push(<Item key={i} {...this.props} id={i} />);
    }

    console.log(this.props.surveyStore);

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

export default SurveyList;
