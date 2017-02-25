import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

export default class GearRatio extends Component {
  render() {
    return (
      <div>
        <Header as='h2' color='blue' textAlign='center'>Gear Ratio</Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
            <Grid.Column>
              <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}