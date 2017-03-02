import React from 'react';
import { Header, List } from 'semantic-ui-react';

const Overview = (props) => {
  return (
    <div className='margin-top'>
      <Header as='h2' size='large' color='blue' textAlign='center'>OVERVIEW</Header>
        <List>
          <List.Item>Body Style: 2-door Coupe / Convertible</List.Item>
          <List.Item>Engine: 2.3L Inline 4</List.Item>
          <List.Item>Length: 171.1 in</List.Item>
          <List.Item>Width: 66.1 in</List.Item>
          <List.Item>Height: 53.9 in</List.Item>
          <List.Item>Curb Weight: 2,568.4 - 2,998.3 lb</List.Item>
        </List>
    </div>
  )
}

export default Overview;