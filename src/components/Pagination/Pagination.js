import { inject, observer } from "mobx-react";
import { Menu, Icon } from "semantic-ui-react";
import React from "react";

@inject('authStore')
@observer
class Pagination extends React.Component {
  state = { activeItem: '1' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state;

    return (
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
    );
  }
}

export default Pagination;
