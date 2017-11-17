import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { List, Menu, Icon, Grid, Card, Image } from "semantic-ui-react";
import React from "react";

import { Layout } from 'app';

const Item = (props) => {
  const { match: { url }, id } = props;
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

@inject('authStore')
@observer
class SurveyList extends React.Component {
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { match: { url } } = this.props;
    const { activeItem } = this.state;

    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push(<Item {...this.props} id={i} />);
    }

    return (
      <Layout>
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width={3}>
              <Menu text vertical>
                <Menu.Item header>Category</Menu.Item>
                <Menu.Item>
                  Individual
                  <Menu.Menu>
                    <Menu.Item name="foods" active={activeItem === 'foods'} onClick={this.handleItemClick} />
                    <Menu.Item name="desserts" active={activeItem === 'desserts'} onClick={this.handleItemClick} />
                    <Menu.Item name="animals" active={activeItem === 'animals'} onClick={this.handleItemClick} />
                    <Menu.Item name="characters" active={activeItem === 'characters'} onClick={this.handleItemClick} />
                    <Menu.Item name="feminism" active={activeItem === 'feminism'} onClick={this.handleItemClick} />
                  </Menu.Menu>
                </Menu.Item>
                <Menu.Item>
                  Genre
                  <Menu.Menu>
                    <Menu.Item name="movies" active={activeItem === 'movies'} onClick={this.handleItemClick} />
                    <Menu.Item name="dramas" active={activeItem === 'dramas'} onClick={this.handleItemClick} />
                    <Menu.Item name="animations" active={activeItem === 'animations'} onClick={this.handleItemClick} />
                    <Menu.Item name="games" active={activeItem === 'games'} onClick={this.handleItemClick} />
                    <Menu.Item name="entertainments" active={activeItem === 'entertainments'} onClick={this.handleItemClick} />
                  </Menu.Menu>
                </Menu.Item>
              </Menu>
            </Grid.Column>
            <Grid.Column width={13}>
              <Card.Group itemsPerRow={4}>
                {items}
              </Card.Group>

              {/**
               * pagination -- start
               */}
              <Menu pagination borderless>
                <Menu.Item as='a' icon>
                  <Icon name='left chevron' />
                </Menu.Item>
                <Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick} />
                <Menu.Item name='2' active={activeItem === '2'} onClick={this.handleItemClick} />
                <Menu.Item name='3' active={activeItem === '3'} onClick={this.handleItemClick} />
                <Menu.Item name='4' active={activeItem === '4'} onClick={this.handleItemClick} />
                <Menu.Item name='5' active={activeItem === '5'} onClick={this.handleItemClick} />
                <Menu.Item name='6' active={activeItem === '6'} onClick={this.handleItemClick} />
                <Menu.Item as='a' icon>
                  <Icon name='right chevron' />
                </Menu.Item>
              </Menu>
              {/**
               * pagination -- end
               */}

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default SurveyList;
