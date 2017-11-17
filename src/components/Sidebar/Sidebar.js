import { inject, observer } from "mobx-react";
import { Menu} from "semantic-ui-react";
import React from "react";

@inject('authStore')
@observer
class SideBar extends React.Component {
  state = { activeItem: 'foods' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    const { activeItem } = this.state;

    return (
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
    );
  }
}

export default SideBar;
