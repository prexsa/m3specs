import React, { Component } from 'react';
import { Link } from 'react-router';
import { Button, Divider, Header, Image, Item, List, Menu } from 'semantic-ui-react';

import Navigation from '../components/Navigation';
import GearRatio from '../components/GearRatio';

export default class e30 extends Component {
  render() {
    var style = {
      opacity: 0.85
    }

    return (
      <div className='car-details-container'>
        <Navigation />
        <div className='banner-container'>
          <Image  style={style} fluid src="../../assets/e30.jpg" />
          <div className='banner'>
            <Header as="h1" size='huge' color='grey' textAlign='center'>E30 M3</Header>
            <Header as="h3" size='large' color='grey' textAlign='center'>Find Local Listings</Header>
            <Button basic color='green'>Search</Button>
          </div>
        </div>

        <Divider hidden={true} />

        <div>
          <Button.Group widths='5' basic>
            <Button>OverView</Button>
            <Button>Gear Ratio Calculations</Button>
            <Button>Press & Reviews</Button>
            <Button>For Sale</Button>
            <Button>Local Meetups</Button>
          </Button.Group>
          <Header as='h2' size='large' color='blue' textAlign='center'>OVERVIEW</Header>
          <List>
            <List.Item>Body Style: 2-door Coupe / Convertible</List.Item>
            <List.Item>Engine: 2.3L Inline 4</List.Item>
            <List.Item>Length: 171.1 in</List.Item>
            <List.Item>Width: 66.1 in</List.Item>
            <List.Item>Height: 53.9 in</List.Item>
            <List.Item>Curb Weight: 2,568.4 - 2,998.3 lb</List.Item>
          </List>

          <GearRatio />

          <Header as='h2' size='large' color='blue' textAlign='center'>Press & Reviews</Header>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header as='a'>Header</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
            <Item>
              <Item.Content>
                <Item.Header as='a'>Header</Item.Header>
                <Item.Meta>Description</Item.Meta>
                <Item.Description>
                  <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
                </Item.Description>
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
          <Header as='h2' size='large' color='blue' textAlign='center'>For Sale</Header>
          <Header as='h2' size='large' color='blue' textAlign='center'>Local Meetups</Header>
        </div>

      </div>
    )
  }
}