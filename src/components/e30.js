import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Divider, Header, Image, List, Menu } from 'semantic-ui-react';

import Navigation from './Navigation';
import GearRatio from './GearRatio';
import OverView from './overview';
import PressReviews from './pressreviews';
import Listings from './listings';
import MarketValue from './marketvalue';

class e30 extends Component {
  render() {
    var style = {
      opacity: 0.85
    }

    var spacing = {
      marginBottom: '10px'
    }

    const specs = this.props.specs[0];
    const editorials = this.props.editorials[0];
    //console.log('Props: ', specs);

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
          <div className='center margins'>
            <List horizontal>
              <List.Item>
                <List.Icon name='file text outline' size='big' style={spacing} color='grey'/>
                <Header as='h4' color='grey' size='tiny'>OVERVIEW</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='cogs' size='big' style={spacing} color='grey'/>
                <Header as='h4' color='grey' size='tiny'>GEAR RATIO CALCULATIONS</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='newspaper' size='big' style={spacing} color='grey'/>
                <Header as='h4' color='grey' size='tiny'>PRESS & REVIEWS</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='dollar' size='big' style={spacing} color='grey'/>
                <Header as='h4' color='grey' size='tiny'>ESTIMATED MARKET VALUE</Header>
              </List.Item>
              <List.Item>
              <List.Icon name='list' size='big' style={spacing} color='grey'/>
                <Header as='h4' color='grey' size='tiny'>LISTINGS</Header>
              </List.Item>
            </List>
          </div>

          <OverView equipment={specs} />
          <GearRatio />
          <PressReviews editorials={editorials} />
          <MarketValue equipment={specs} />
          <Listings />

        </div>

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    specs: state.specs,
    editorials: state.editorials,
    autotrader: state.autotrader
  }
}


export default connect(mapStateToProps)(e30);