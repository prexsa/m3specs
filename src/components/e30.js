import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Button, Divider, Header, Image, List, Menu } from 'semantic-ui-react';

import Navigation from './Navigation';
import GearRatio from './GearRatio';
import OverView from './overview';
import PressReviews from './pressreviews';
import Diy from './diy';
import MarketValue from './marketvalue';

class e30 extends Component {
  render() {
    var spacing = {
      marginBottom: '10px'
    }

    const specs = this.props.specs[0];
    const editorials = this.props.editorials[0];
    //console.log('Props: ', specs);

    return (
      <div className='car-details-container'>
        <Navigation />

        <Divider hidden={true} />

        <div>
          <div className='center margins'>
            <List horizontal>
              <List.Item>
                <a href='#overview'>
                  <List.Icon name='file text outline' size='big' style={spacing} color='grey'/>
                  <Header as='h4' color='grey' size='tiny'>OVERVIEW</Header>
                </a>
              </List.Item>
              <List.Item>
                <a href='#gear-ratio'>
                  <List.Icon name='cogs' size='big' style={spacing} color='grey'/>
                  <Header as='h4' color='grey' size='tiny'>GEAR RATIO CALCULATIONS</Header>
                </a>
              </List.Item>
              <List.Item>
                <a href='#press'>
                  <List.Icon name='newspaper' size='big' style={spacing} color='grey'/>
                  <Header as='h4' color='grey' size='tiny'>PRESS & REVIEWS</Header>
                </a>
              </List.Item>
              <List.Item>
                <a href='#market-value'>
                  <List.Icon name='dollar' size='big' style={spacing} color='grey'/>
                  <Header as='h4' color='grey' size='tiny'>ESTIMATED MARKET VALUE</Header>
                </a>
              </List.Item>
              <List.Item>
                <a href='#listings'>
                  <List.Icon name='list' size='big' style={spacing} style={{'marginBottom': '25px'}} color='grey'/>
                  <Header as='h4' color='grey' size='tiny'>DIY (DO IT YOURSELF)</Header>
                </a>
              </List.Item>
            </List>
          </div>

          <OverView equipment={specs} />
          <GearRatio />
          <PressReviews editorials={editorials} />
          <MarketValue equipment={specs} />
          <Diy />

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