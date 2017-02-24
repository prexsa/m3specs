import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Header } from 'semantic-ui-react';

export default class e30 extends Component {
  render() {
    return (
      <div className='car-details-container'>
        <Header as="h1" size='huge'>E30 M3</Header>
        <p>Find Local Listings</p>
        <Button basic color='green'>Search</Button>
      </div>
    )
  }
}