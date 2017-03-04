import React from 'react';
import { Grid, Header, List } from 'semantic-ui-react';

const Overview = (props) => {

  console.log('Overview props: ', props.equipped)

  const options = props.equipped;
  console.log('Options: ', options)

  const equipped = props.equipped;

  // const cityMPG = equipped.MPG.city;
  // const hwyMPG = equipped.MPG.highway;
  // const horsepower = equipped.engine.horsepower;
  // const horsepowerRPM = equipped.rpm.horsepower;
  // const torqueRPM = equipped.rpm.torque;
  // const modelName = equipped.name;


  return (
    <div className='margin-top'>
      <Header as='h2' size='large' color='blue' textAlign='center'>OVERVIEW</Header>

        <Grid columns={2} padded='horizontally'>
          <Grid.Row>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Specs</Header>
              <List size='large'>
                <List.Item>Engine: 2.3L Inline 4</List.Item>
                <List.Item>Length: 171.1 in</List.Item>
                <List.Item>Width: 66.1 in</List.Item>
                <List.Item>Height: 53.9 in</List.Item>
                <List.Item>Curb Weight: 2,568.4 - 2,998.3 lb</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' textAlign='center'>Features and Options</Header>
              <List>
                <List.Item>Super cool leather seats</List.Item>
                <List.Item>Has a sport button that makes it feels faster</List.Item>
                <List.Item>Big 19" rims</List.Item>
                <List.Item>Moon roof that gets used once in a while</List.Item>
                <List.Item>It drives better at higher RPM's</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  )
}

export default Overview;