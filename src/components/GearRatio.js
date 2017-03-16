import React, { Component } from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

export default class GearRatio extends Component {
  componentDidMount() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const offSet = Math.PI/2;
    ctx.beginPath();
    const start = offSet + 1;
    const end = (Math.PI * 2) + offSet - 1;
    ctx.arc(250,200,190,start,end);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#52688c';
    ctx.stroke();
    ctx.closePath();

    let angle = start;
    const tick = 0.4;

    while (angle < end) {
      ctx.beginPath();
      ctx.strokeStyle = '#52688c'; // just so you can see better
      // I make a line going from radius 50 to radius 40
      ctx.moveTo(Math.cos(angle)*193 + 250, Math.sin(angle)*190 + 200, 5, 5);
      ctx.lineTo(Math.cos(angle)*180 + 250, Math.sin(angle)*180 + 200, 5, 5);
      ctx.stroke();
      angle += tick;
    }









    ctx.beginPath();
    // arc(x-coordiante, y-coordinate, radius, startangle, endangle);
    ctx.arc(250,250,30,1.2 * Math.PI, 2 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,250,50,1.3 * Math.PI, 2 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,250,70,1.5 * Math.PI, 2 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,250,90,1.7 * Math.PI, 2 * Math.PI);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

  }
  
  render() {
    return (
      <div className='margins'>
        <div className='container-width'>
          <Header className='header-spacing' as='h1' size='huge' color='black' textAlign='center' dividing={true}>GEAR RATIO</Header>

          <canvas id='myCanvas' width='500' height='375' style={{border: '1px solid black'}}></canvas>

          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
              <Grid.Column>
                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}
