import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';

const Overview = (props) => {

  console.log('Overview props: ', props.equipped)

  const options = props.equipped;
  if(!options) {
    return <div>Loading...</div>;
  }

  const equipped = props.equipped;
  const modelName = equipped.name;
  const cityMPG = equipped.MPG.city;
  const hwyMPG = equipped.MPG.highway;
  const horsepower = equipped.engine.horsepower;
  const horsepowerRPM = equipped.engine.rpm.horsepower;
  const torque = equipped.engine.torque;
  const torqueRPM = equipped.engine.rpm.torque;

  const optionsList = (equipped) => {
    const optionsItem = equipped.options[0].options.map((carOption) => {
      console.log('carOption: ', carOption.name)
      return (<List.Item>carOption.name</List.Item>);
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
                <List.Item>{cityMPG} City / {hwyMPG} HWY</List.Item>
                <List.Item>{modelName}</List.Item>
                <List.Item>{horsepower} horsepower @ {horsepowerRPM}</List.Item>
                <List.Item>{torque} lbs of torque @ {torqueRPM}</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Features and Options</Header>
              <List>
                {optionsList(equipped)}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  )
}

export default Overview;