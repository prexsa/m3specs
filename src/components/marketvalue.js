import React from 'react';
import { Header, List } from 'semantic-ui-react';

const Marketvalue = (props) => {
  const options = props.equipment;
  if(!options) {
    return <div>Loading...</div>;
  }

  const pricePrivate = options.price.usedPrivateParty;
  const priceDealer = options.price.usedTmvRetail;
  const priceTradeIn = options.price.usedTradeIn;

  return (
    <div>
      <Header as='h2' size='huge' color='black' textAlign='center'>Estimated Market Value</Header>
      <div className='center'>
        <List horizontal>
          <List.Item>
            <Header size='huge' sub>Private Party</Header>
            <span>${pricePrivate}</span>
          </List.Item>
          <List.Item>
            <Header size='huge' sub>Dealer</Header>
            <span>${priceDealer}</span>
          </List.Item>
          <List.Item>
            <Header size='huge' sub>Trade In</Header>
            <span>${priceTradeIn}</span>
          </List.Item>
        </List>
      </div>
    </div>
  );
}

export default Marketvalue;