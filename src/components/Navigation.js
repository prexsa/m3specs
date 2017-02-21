import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class Navigation extends Component {
  render() {
    return (
      <Menu>
        <Menu.Item  Header>M3Specs</Menu.Item>
        <Menu.Item>E30</Menu.Item>
        <Menu.Item>E36</Menu.Item>
        <Menu.Item>E46</Menu.Item>
        <Menu.Item>E90/92/93</Menu.Item>
        <Menu.Item>F80</Menu.Item>
      </Menu>
    )
  }
}