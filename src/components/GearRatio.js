import React, { Component } from 'react';
import { Grid, Header, Image, Label, Table } from 'semantic-ui-react';

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
    const tick = 0.2039;

    while (angle < end) {
      ctx.beginPath();
      ctx.strokeStyle = '#52688c'; // just so you can see better
      // I make a line going from radius 50 to radius 40
      ctx.moveTo(Math.cos(angle)*193 + 250, Math.sin(angle)*190 + 200);
      ctx.lineTo(Math.cos(angle)*180 + 250, Math.sin(angle)*180 + 200);
      ctx.fillText("1", 0,0)
      ctx.stroke();
      angle += tick;
    }

    ctx.beginPath();
    // arc(x-coordiante, y-coordinate, radius, startangle, endangle);
    ctx.arc(250,200,60,start, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,200,80, start, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,200,100, start, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,200,120,start + 0.5, end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250,200,140,start, 10 - end);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();


    // gear ratio calculations
    let dataSet = [];

    let RPM = 8000;
    let tireDiameter = 25.496;
    let finalDriveRatio = 3.62;
    const coefficient = 336;
    let gears = [4.23, 2.53, 1.67, 1.23, 1.00, 0.83];

    gears.map((gear) => {
      const rpmRange = RPM/1000;
      let startValue = 1;

      const speedArray = [];

      while(startValue <= rpmRange) {
        const incrementThousand = startValue * 1000;
        const speed = (incrementThousand * tireDiameter) / (finalDriveRatio * gear * coefficient);
        const twoDecimalPt = parseFloat(speed).toFixed(2);
        speedArray.push(twoDecimalPt);
        startValue++;
      }
      return dataSet.push(speedArray)
    })

    console.log('dataSet: ', dataSet)


    const data = dataSet.map((gearRange) => {
      const numsToLetter = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six'];

      console.log('gearRange: ', gearRange)
      gearRange.map((speedValue) => {
        return (<Table.Cell>speedValue</Table.Cell>)
      })

    })
  }
  
  render() {
    return (
      <div className='margins'>
        <div className='container-width'>
          <Header className='header-spacing' as='h1' size='huge' color='black' textAlign='center' dividing={true}>GEAR RATIO</Header>


          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column>
              <canvas id='myCanvas' width='500' height='375' style={{border: '1px solid black'}}></canvas>            
              </Grid.Column>
              <Grid.Column>
                Horizontal Bar Chart
                <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <div>
            This gear ratio calculation is based on Tire Diameter(25.596), Final Drive Ratio (3.62),
            coefficient (336), redline RPM (8000), gear ratio [4.23, 2.53, 1.67, 1.23, 1.00, 0.83]
          </div>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Gear / RPM</Table.HeaderCell>
                <Table.HeaderCell>1000</Table.HeaderCell>
                <Table.HeaderCell>2000</Table.HeaderCell>
                <Table.HeaderCell>3000</Table.HeaderCell>
                <Table.HeaderCell>4000</Table.HeaderCell>
                <Table.HeaderCell>5000</Table.HeaderCell>
                <Table.HeaderCell>6000</Table.HeaderCell>
                <Table.HeaderCell>7000</Table.HeaderCell>
                <Table.HeaderCell>8000</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>First</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Second</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Third</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Fourth</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Fifth</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Six</Label>
                </Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
                <Table.Cell>Cell</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    )
  }
}
