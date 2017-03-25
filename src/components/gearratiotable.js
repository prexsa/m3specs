import React from 'react';
import { Label, Table } from 'semantic-ui-react';

const GearRatioTable = () => {

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

    const data = dataSet.map((gearRange, i) => {
      const numsToLetter = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Six'];
      return (
          <Table.Row key={i}>
            <Table.Cell><Label ribbon>{numsToLetter[i]}</Label></Table.Cell>
            {gearRange.map((gear, j) => {
                return (
                  <Table.Cell key={j}  textAlign='center'>{gear}</Table.Cell>
                )
            })}
          </Table.Row>
      )
    })

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Gear / RPM</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>1,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>2,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>3,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>4,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>5,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>6,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>7,000</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>8,000</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data}
        </Table.Body>
      </Table>
      
    </div>
  )
}

export default GearRatioTable;