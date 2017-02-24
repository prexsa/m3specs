import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';


export default class Cards extends Component {
  render() {
    return (
      <Card.Group itemsPerRow={3}>
        <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='red' 
          />
        <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='orange' 
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='brown' 
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='green' 
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='blue' 
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='purple'
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='pink' 
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='olive' 
          />
          <Card 
          rasied 
          header = 'E30'
          href = 'link'
          meta = 'E30 Specs'
          description = 'E30 was the introduction for the M3 class BMW'
          color='yellow' 
          />
      </Card.Group>
    )
  }
}