import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <Menu>
        <Menu.Item header
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}>
          M3Specs</Menu.Item>
        <Menu.Item
          name='e30'
          active={activeItem === 'e30'}
          onClick={this.handleItemClick}
          >E30</Menu.Item>
        <Menu.Item
          name='e36'
          active={activeItem === 'e36'}
          onClick={this.handleItemClick}
          >E36</Menu.Item>
        <Menu.Item
          name='e46'
          active={activeItem === 'e46'}
          onClick={this.handleItemClick}
          >E46</Menu.Item>
        <Menu.Item
          name='e90'
          active={activeItem === 'e90'}
          onClick={this.handleItemClick}
          >E90/92/93</Menu.Item>
        <Menu.Item
          name='f80'
          active={activeItem === 'f80'}
          onClick={this.handleItemClick}
          >F80</Menu.Item>
      </Menu>
    )
  }
}