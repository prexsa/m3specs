import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Carousel from '../components/carousel';
import Cards from '../components/Cards';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Carousel />
        <div className="content-container" >
          <Cards />
        </div>
      </div>
    );
  }
}
