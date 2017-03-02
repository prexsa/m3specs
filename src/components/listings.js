import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

const Listings = (props) => {
  return (
    <div className='margin-top'>
      <Header as='h2' size='large' color='blue' textAlign='center'>Listings</Header>
        <Grid>
          <Grid.Column width={4}>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={12}>
            <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={4}>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={12}>
            <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
        </Grid>
    </div>
  )
}

export default Listings;