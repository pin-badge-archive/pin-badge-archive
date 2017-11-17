import { inject, observer } from "mobx-react";
import React from "react";
import { Breadcrumb, Item, Label, Image, Button, Divider, Icon } from "semantic-ui-react";

import { Layout } from 'app';
import { SidebarLayout } from 'components';

const sections = [
  { key: 'Individual', content: 'Individual', link: true },
  { key: 'Desserts', content: 'Desserts', active: true },
];

const paragraph = <Image src="https://react.semantic-ui.com/assets/images/wireframe/short-paragraph.png" />

const imageUrl = "https://react.semantic-ui.com/assets/images/wireframe/image.png";

@inject('authStore')
@observer
class SalesDetail extends React.Component {
  render() {
    return (
      <Layout>
        <SidebarLayout>
          <Breadcrumb style={{ flexGrow: 'none' }} icon='right angle' sections={sections} />
          <Item.Group>
            <Item>
              <Item.Image src={imageUrl} />
              <Item.Content>
                <Button
                  color='red'
                  content='Like'
                  icon='heart'
                  label={{ basic: true, color: 'red', pointing: 'left', content: '2,048' }}
                  floated="right"
                />
                <Item.Header>Item {this.props.match.params.id}</Item.Header>
                <Item.Meta>
                  <Icon link color="blue" size="large" name="twitter" />
                  Clare Kang(@clarekang_dev)
                </Item.Meta>
                <Item.Description>
                  Price: 10,000 WON<br/>
                  Size: 30×20mm<br/>
                  Material: Gold Plate<br/>
                  Description:
                  {paragraph}
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
        </SidebarLayout>
      </Layout>
    );
  }
}

export default SalesDetail;
