import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Divider, Header, Image, List, Menu } from 'semantic-ui-react';

import Navigation from '../components/Navigation';
import GearRatio from '../components/GearRatio';
import OverView from '../components/overview';
import PressReviews from '../components/pressreviews';
import Listings from '../components/listings';
import MarketValue from '../components/marketvalue';

class e30 extends Component {
  render() {
    var style = {
      opacity: 0.85
    }

    var spacing = {
      marginBottom: '10px'
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
          <div className='center model-nav'>
            <List horizontal>
              <List.Item>
                <List.Icon name='file text outline' size='big' style={spacing}/>
                <Header as='h4' color='grey'>OVERVIEW</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='cogs' size='big' style={spacing}/>
                <Header as='h4' color='grey'>GEAR RATIO CALCULATIONS</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='newspaper' size='big' style={spacing}/>
                <Header as='h4' color='grey'>PRESS & REVIEWS</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='dollar' size='big' style={spacing} />
                <Header as='h4' color='grey'>ESTIMATED MARKET VALUE</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='list' size='big' style={spacing}/>
                <Header as='h4' color='grey'>LISTINGS</Header>
              </List.Item>
            </List>
          </div>

          <OverView equipment={modelOverview} />
          <GearRatio />
          <PressReviews />
          <MarketValue equipment={modelOverview} />
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