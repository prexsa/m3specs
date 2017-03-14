import React from 'react';
import { List } from 'semantic-ui-react';

const Options = (props) => {
  return (
    <List.Item>{props.option}</List.Item>
  )
}

export default Options;