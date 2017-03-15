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

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div  className='margins'>
      <div className='container-width'>
        <Header  className='header-spacing' as='h1' size='huge' color='black' textAlign='center' dividing={true}>Estimated Market Value</Header>
        <div className='center'>
          <List horizontal>
            <List.Item>
              <Header size='huge' textAlign='center' sub>Private Party</Header>
              <br />
              <span className='currency'>${numberWithCommas(pricePrivate)}</span>
            </List.Item>
            <List.Item>
              <Header size='huge' textAlign='center' sub>Dealer</Header>
              <br />
              <span className='currency'>${numberWithCommas(priceDealer)}</span>
            </List.Item>
            <List.Item>
              <Header size='huge' textAlign='center' sub>Trade In</Header>
              <br />
              <span className='currency'>${numberWithCommas(priceTradeIn)}</span>
            </List.Item>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Marketvalue;