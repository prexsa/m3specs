import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

import Navigation from '../components/Navigation';
import Carousel from '../components/carousel';
import Cards from '../components/Cards';
import GearRatio from '../components/GearRatio';

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
