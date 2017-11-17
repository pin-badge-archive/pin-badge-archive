import { Card, Image } from "semantic-ui-react";
import React from "react";

class Item extends React.Component {
  render() {
    const { match: { url }, id } = this.props;
    return (
      <Card
        href={`${url}/${id}`}
      >
        <Image
          fluid
          label={ id < 5 && { as: 'a', color: 'red', content: 'New', ribbon: true }}
          src="https://react.semantic-ui.com/assets/images/wireframe/white-image.png"
        />
        <Card.Content>
          <Card.Header>Item {id}</Card.Header>
          <Card.Meta>Clare Kang</Card.Meta>
        </Card.Content>
      </Card>
    );
  }
}

export default Item;
