import { inject, observer } from "mobx-react";
import React from "react";
import { Helmet } from "react-helmet";
import {
  Breadcrumb, Item, Label, Image, Button, Divider, Icon,
  Dimmer, Loader,
} from "semantic-ui-react";

import { Layout } from 'app';
import { SidebarLayout } from 'components';

const sections = [
  { key: 'Individual', content: 'Individual', link: true },
  { key: 'Desserts', content: 'Desserts', active: true },
];

const paragraph = <Image src="https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png" />

const imageUrl = "https://react.semantic-ui.com/assets/images/wireframe/image.png";

@inject('surveyStore')
@observer
class SurveyDetail extends React.Component {
  id;
  componentWillMount() {
    this.id = this.props.match.params.id;
  }
  componentDidMount() {
    if (this.props.match && !!this.id) {
      this.props.surveyStore.load(this.id);
    }
  }
  render() {
    const { surveyStore: { survey }, match: { params: { id } } } = this.props;
    return (
      <Layout>
        <SidebarLayout>
          {
            !survey ?
              <Dimmer active>
                <Helmet>
                  <title>Loading... :: B ARCHIVE</title>
                </Helmet>
                <Loader>Loading</Loader>
              </Dimmer>
              :
              <div>
                <Helmet>
                  <title>{survey.itemName} :: B ARCHIVE</title>
                </Helmet>
                <Breadcrumb style={{ flexGrow: 'none' }} icon='right angle' sections={sections} />
                <Item.Group>
                  <Item>
                    <Item.Image src={imageUrl} />
                    <Item.Content>
                      <Button
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{
                          basic: true,
                          color: 'red',
                          pointing: 'left',
                          content: survey.itemLike.toLocaleString()
                        }}
                        floated="right"
                      />
                      <Item.Header>{survey.itemName}</Item.Header>
                      <Item.Meta>
                        <Icon link color="blue" size="large" name="twitter" />
                        {survey.sellerName}(@clarekang_dev)
                      </Item.Meta>
                      <Item.Description>
                        Price: {survey.itemPrice.toLocaleString()} WON<br/>
                        Size: 30×20mm<br/>
                        Material: {survey.itemSpec}<br/>
                        {`Description: ${survey.itemDescription}`}
                      </Item.Description>
                      <Item.Extra>
                        <Label size="small">#Dessert</Label>
                        <Label size="small">#Food</Label>
                        <Label size="small">#Chocolate</Label>
                      </Item.Extra>
                    </Item.Content>
                  </Item>
                </Item.Group>
                <Divider horizontal>DETAIL</Divider>
                <Image src={imageUrl} fluid />
                {paragraph}
                {paragraph}
                {paragraph}
              </div>
          }
        </SidebarLayout>
      </Layout>
    );
  }
}

export default SurveyDetail;
