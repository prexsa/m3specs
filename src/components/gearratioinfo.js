import React, { Component } from 'react';
import { List } from 'semantic-ui-react';

class GearRatioInfo extends Component {
  render() {
    return (
      <div>
        <List bulleted>
          <List.Item>Tire Diameter (25.596) - 275/30R19</List.Item>
          <List.Item>Final Drive Ratio (3.62)</List.Item>
          <List.Item>Coefficient (336)</List.Item>
          <List.Item>Redline RPM (8,000)</List.Item>
          <List.Item>Gear Ratio
            <List.List>
              <List.Item>First Gear: 4.23</List.Item>
              <List.Item>Second Gear: 2.53</List.Item>
              <List.Item>Third Gear: 1.67</List.Item>
              <List.Item>Fourth Gear: 1.23</List.Item>
              <List.Item>Fifth Gear: 1.00</List.Item>
              <List.Item>Sixth Gear: 0.83</List.Item>
            </List.List>
          </List.Item>
        </List>
      </div>
    )
  }
}

export default GearRatioInfo;