import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Header, List } from 'semantic-ui-react';

export default class e30 extends Component {
  render() {
    return (
      <div className='car-details-container'>
        <Header as="h1" size='huge'>E30 M3</Header>
        <p>Find Local Listings</p>
        <Button basic color='green'>Search</Button>

        <div>
          <Header as='h2' size='large'>OVERVIEW</Header>
          <List>
            <List.Item>Body Style: 2-door Coupe / Convertible</List.Item>
            <List.Item>Engine: 2.3L Inline 4</List.Item>
            <List.Item>Length: 171.1 in</List.Item>
            <List.Item>Width: 66.1 in</List.Item>
            <List.Item>Height: 53.9 in</List.Item>
            <List.Item>Curb Weight: 2,568.4 - 2,998.3 lb</List.Item>
          </List>

          <Header as='h2' size='large'>Gear Ratio Calculations</Header>
        </div>

      </div>
    )
  }
}