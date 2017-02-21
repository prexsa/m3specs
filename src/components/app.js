import React, { Component } from 'react';

import Navigation from '../components/Navigation';
import Carousel from '../components/slider';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Carousel />
      </div>
    );
  }
}
