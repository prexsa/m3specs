import React from 'react';
import { Header, Image, Item } from 'semantic-ui-react';

const PressReviews = (props) => {
  return (
    <div className='margin-top'>
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
    </div>
  )
}

export default PressReviews;