import React from 'react';
import { Grid, Header, Image, Item } from 'semantic-ui-react';

const PressReviews = (props) => {
  return (
    <div className='margin-top'>
      <Header as='h1' size='huge' color='black' textAlign='center'>EDITORIALS</Header>
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h4' color='blue' textAlign='center'>Editorial Reviews</Header>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as='h4' color='blue'>Title of article</Header>
              <div>
                Content about from the article
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h4' color='blue' textAlign='center'>Editorial Reviews</Header>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as='h4' color='blue'>Title of article</Header>
              <div>
                Content about from the article
              </div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header as='h4' color='blue' textAlign='center'>Editorial Reviews</Header>
            </Grid.Column>
            <Grid.Column width={13}>
              <Header as='h4' color='blue'>Title of article</Header>
              <div>
                Content about from the article
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </div>
  )
}

export default PressReviews;