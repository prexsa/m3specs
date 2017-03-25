import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';

import GearRatioTable from '../components/gearratiotable';
import GearRatioInfo from '../components/gearratioinfo';
import GearRatioLineChart from '../components/gearratiolinechart';

export default class GearRatio extends Component {
  render() {
    return (
      <div className='margins'>
        <div className='container-width'>
          <Header id='gear-ratio' className='header-spacing' as='h1' size='huge' color='black' textAlign='center' dividing={true}>GEAR RATIO</Header>

          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                Gear Ratio Info
                <GearRatioInfo />
              </Grid.Column>
              <Grid.Column>
                Gear Ratio Line Chart
                <GearRatioLineChart />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <GearRatioTable />
        </div>
      </div>
    )
  }
}
