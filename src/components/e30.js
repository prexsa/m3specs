import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Divider, Grid, Header, Image, Item, List, Menu } from 'semantic-ui-react';

import Navigation from '../components/Navigation';
import GearRatio from '../components/GearRatio';
import OverView from '../components/overview';
import PressReviews from '../components/pressreviews';
import Listings from '../components/listings';

class e30 extends Component {
  render() {
    var style = {
      opacity: 0.85
    }

    const modelOverview = this.props.e30[0];

    return (
      <div className='car-details-container'>
        <Navigation />
        <div className='banner-container'>
          <Image  style={style} fluid src="../../assets/e30.jpg" />
          <div className='banner'>
            <Header as="h1" inverted size='huge' textAlign='center'>E30 M3</Header>
            <Header as="h3" inverted size='large' textAlign='center'>Find Local Listings</Header>
            <div className='search-btn-container'>
              <Button inverted color='black'>Search</Button>            
            </div>
          </div>
        </div>

        <Divider hidden={true} />

        <div>
          <Button.Group widths='5' basic>
            <Button>OverView</Button>
            <Button>Gear Ratio Calculations</Button>
            <Button>Press & Reviews</Button>
            <Button>Kelly Blue Blook Estimated Value</Button>
            <Button>Listings</Button>
          </Button.Group>
          
          <OverView equipped={modelOverview} />
          <GearRatio />
          <PressReviews />

          <Header as='h2' size='large' color='blue' textAlign='center'>Kelly Blue Book Estimated Value</Header>
          <Listings />
          
        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    e30: state.e30
  }
}


export default connect(mapStateToProps)(e30);