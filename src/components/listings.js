import React from 'react';
import { Grid, Header, Image, List } from 'semantic-ui-react';

const Listings = (props) => {
  return (
    <div className='margins striped-background-color'>
      <div className='container-width'>
        <Header className='header-spacing' as='h1' size='huge' color='black' textAlign='center' dividing={true}>LISTINGS</Header>
        <Grid>
          <Grid.Column width={4}>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3' color='blue'>Name of vehicle</Header>
              <List>
                <List.Item>Located At: Your Mom's House </List.Item>
                <List.Item>Asking Price: $1,000,000</List.Item>
                <List.Item>Contact Seller: Phone Number / Email</List.Item>
                <List.Item>Vehicle desciption</List.Item>
              </List>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={4}>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={12}>
            <Header as='h3' color='blue'>Name of vehicle</Header>
              <List>
                <List.Item>Located At: Your Mom's House </List.Item>
                <List.Item>Asking Price: $1,000,000</List.Item>
                <List.Item>Contact Seller: Phone Number / Email</List.Item>
                <List.Item>Vehicle desciption</List.Item>
              </List>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  )
}

export default Listings;