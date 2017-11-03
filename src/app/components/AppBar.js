import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Menu, Visibility, Input, Image,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { inject, observer, Provider } from "mobx-react";

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  marginBottom: '1em',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)',
}

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}

const fixedOverlayStyle = {
  ...overlayStyle,
  position: 'fixed',
  top: '80px',
  zIndex: 10,
}

@inject('authStore', 'routerStore')
@observer
export default class AppBar extends Component {
  constructor(props) {
    super(props);
    const { pathname } = document.location;
    this.state = {
      menuFixed: false,
      overlayFixed: false,
      activeItem: pathname ? pathname.replace('/', '') : 'surveys',
    }
  }

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state
    if (!overlayRect) this.setState({ overlayRect: _.pick(c.getBoundingClientRect(), 'height', 'width') })
  }

  stickOverlay = () => this.setState({ overlayFixed: true })
  
  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  handleItemClick = (e, { name }) => {
    this.props.routerStore.push(name);
  }

  render() {
    const { menuFixed, activeItem } = this.state;
    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={menuFixed && 'top'}
          style={menuFixed ? fixedMenuStyle : menuStyle}
          size='tiny'
          pointing
          secondary
          fluid
        >
          <Container text>
            <Menu.Item header>B ARCHIVE</Menu.Item>
            <Menu.Item as="a" name="surveys" active={activeItem === 'surveys'} onClick={this.handleItemClick} />
            <Menu.Item as="a" name="sales" active={activeItem === 'sales'} onClick={this.handleItemClick} />
            <Menu.Item as="a" name="archives" active={activeItem === 'archives'} onClick={this.handleItemClick} />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input transparent icon={{ name: 'search', link: true }} placeholder='Search...' />
              </Menu.Item>
              {
                this.props.authStore.isLoggedIn ?
                [
                  <Menu.Item as='a' name="my" active={activeItem === 'my'} onClick={this.handleItemClick} />,
                  <Menu.Item as='a' name="logout" onClick={this.props.authStore.logout} />
                ]
                : <Menu.Item as='a' name="login" active={activeItem === 'login'} onClick={this.handleItemClick} />
              }
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}
