import React from 'react';
import { Card, Grid, Header, List } from 'semantic-ui-react';

import CarOption from './caroption';

const Overview = (props) => {

  const options = props.equipment;
  if(!options) {
    return <div>Loading...</div>;
  }

  const equipment = options;
  const modelName = equipment.name;
  const cityMPG = equipment.MPG.city;
  const hwyMPG = equipment.MPG.highway;
  const horsepower = equipment.engine.horsepower;
  const horsepowerRPM = equipment.engine.rpm.horsepower;
  const torque = equipment.engine.torque;
  const torqueRPM = equipment.engine.rpm.torque;

  const optionsList = (equipment) => {
    let optionsItem;
    return optionsItem = equipment.options[0].options.map((carOption) => {
      return <CarOption key={carOption.id} option={carOption.name} />;
    })
  }

  return (
    <div className='margins striped-background-color'>
      <div className='container-width'>
        <Header className='header-spacing' as='h1' size='huge' color='black' textAlign='center' dividing={true}>OVERVIEW</Header>
        <Grid columns={2} padded='horizontally'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Specs</Header>
              <List className='overview-specs' size='large'>
                <List.Item>E46 M3</List.Item>
                <List.Item>{cityMPG} City / {hwyMPG} HWY</List.Item>
                <List.Item>{modelName}</List.Item>
                <List.Item>{horsepower} horsepower @ {horsepowerRPM}</List.Item>
                <List.Item>{torque} lbs of torque @ {torqueRPM}</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Features and Options</Header>
              <Card className='overview-features' centered={true}>
                <List>
                  {optionsList(equipment)}
                </List>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  )
}

export default Overview;