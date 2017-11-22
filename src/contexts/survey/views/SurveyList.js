import { Card } from "semantic-ui-react";
import React from "react";
import { inject, observer } from "mobx-react";

import { Layout } from 'app';
import { SidebarLayout, Pagination, Item } from 'components';

@inject('surveyStore')
@observer
class SurveyList extends React.Component {
  componentDidMount() {
    this.props.surveyStore.search();
  }
  render() {
    const { surveyStore, match: { url } } = this.props;

    return (
      <Layout>
        <SidebarLayout>
          <Card.Group itemsPerRow={5} stackable doubling>
            {
              surveyStore.surveys.map((item, index) => (
                <Item
                  {...this.props} 
                  key={item.id}
                  id={item.id}
                />
              ))
            }
          </Card.Group>
          <Pagination />
        </SidebarLayout>
      </Layout>
    );
  }
}

export default SurveyList;
