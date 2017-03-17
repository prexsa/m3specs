import React, { Component } from 'react';
import { Grid, Header, Image, Label, Table } from 'semantic-ui-react';

import GearRatioTable from '../components/gearratiotable';
import HorizontalBarGraph from '../components/gearratiobargraph';

export default class GearRatio extends Component {
  componentDidMount() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const offSet = Math.PI/2;
    ctx.beginPath();
    const start = offSet + 1;
    const end = (Math.PI * 2) + offSet - 1;
    ctx.arc(200,200,190,start,end);
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#52688c';
    ctx.stroke();
    ctx.closePath();

    let angle = start;
    const tick = 0.2039;

    while (angle < end) {
      ctx.beginPath();
      ctx.strokeStyle = '#52688c'; // just so you can see better
      // I make a line going from radius 50 to radius 40
      ctx.moveTo(Math.cos(angle)*193 + 200, Math.sin(angle)*190 + 200);
      ctx.lineTo(Math.cos(angle)*180 + 200, Math.sin(angle)*180 + 200);
      ctx.fillText("1", 0,0)
      ctx.stroke();
      angle += tick;
    }

    ctx.beginPath();
    // arc(x-coordiante, y-coordinate, radius, startangle, endangle);
    ctx.arc(200,200,60,start, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200,200,80, start, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200,200,100, start, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200,200,120,start + 0.5, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(200,200,140,start, 10 - end);
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


          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
                Guage Gear Range
                <canvas id='myCanvas' width='400' height='375' style={{border: '1px solid black'}}></canvas>            
              </Grid.Column>
              <Grid.Column>
                Horizontal Bar Chart
                <HorizontalBarGraph />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <GearRatioTable />
        </div>
      </div>
    )
  }
}
