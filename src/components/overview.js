import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';

import Caroption from '../components/caroption';

const Overview = (props) => {

  console.log('Overview props: ', props.equipment)

  const options = props.equipment;
  if(!options) {
    return <div>Loading...</div>;
  }

  const equipment = props.equipment;
  const modelName = equipment.name;
  const cityMPG = equipment.MPG.city;
  const hwyMPG = equipment.MPG.highway;
  const horsepower = equipment.engine.horsepower;
  const horsepowerRPM = equipment.engine.rpm.horsepower;
  const torque = equipment.engine.torque;
  const torqueRPM = equipment.engine.rpm.torque;

  const optionsList = (equipment) => {
    const optionsItem = equipment.options[0].options.map((carOption) => {
      console.log('carOption: ', carOption.name)
      return <Caroption car={carOption.name} />;
    })
  }

  return (
    <div className='margin-top'>
      <Header as='h1' size='huge' color='black' textAlign='center'>OVERVIEW</Header>

        <Grid columns={2} padded='horizontally'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Specs</Header>
              <List size='large'>
                <List.Item>E46 M3</List.Item>
                <List.Item>{cityMPG} City / {hwyMPG} HWY</List.Item>
                <List.Item>{modelName}</List.Item>
                <List.Item>{horsepower} horsepower @ {horsepowerRPM}</List.Item>
                <List.Item>{torque} lbs of torque @ {torqueRPM}</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Features and Options</Header>
              <List>
                {optionsList(equipment)}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  )
}

export default Overview;