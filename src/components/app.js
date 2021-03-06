import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import Navigation from './Navigation';
import Carousel from './carousel';
import Cards from './Cards';
import GearRatio from './GearRatio';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
        <Carousel />
        <div className="content-container" >
          <Cards />
          <Divider clearing />
          <GearRatio />
      
        </div>
      </div>
    );
  }
}
