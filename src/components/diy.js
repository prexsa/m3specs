import React from 'react';
import { Header, List } from 'semantic-ui-react';

const Diy = (props) => {
  return (
    <div className='margins striped-background-color'>
      <div className='container-width'>
        <Header 
          id='diy' 
          className='header-spacing' 
          as='h1' 
          size='huge' 
          color='black' 
          textAlign='center' 
          dividing={true}>DIY (DO IT YOURSELF)
        </Header>
        <List as='ol'>
          <List.Item as='li' value='*'>
            <Header as='h4'>Brakes</Header>
            <List.Item as='ol'>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_brake_bleed.shtml' target='_blank'>Bleeding Brakes & Clutch</a>
              </List.Item>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_front_brake_lines.shtml' target='_blank'>Steel Brake Lines- StopTech(Front)</a>
              </List.Item>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_rear_brake_lines.shtml' target='_blank'>Steel Brake Lines - StopTech(Rear)</a>
              </List.Item>
            </List.Item>
          </List.Item>

          <List.Item as='li' value='*'>
            <Header as='h4'>Suspension</Header>
            <List.Item as='ol'>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_front_eibach_sway.shtml' target='_blank'>Front Sway Bar</a>
              </List.Item>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_rear_eibach_sway.shtml' target='_blank'>Rear Sway Bar</a>
              </List.Item>
            </List.Item>
          </List.Item>

          <List.Item as='li' value='*'>
            <Header as='h4'>Transmission</Header>
            <List.Item as='ol'>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_as_ssk.shtml' target='_blank'>AutoSolutions Short Shift Kit</a>
              </List.Item>
              <List.Item as='li' value='-'>
                <a href='http://m3.madrussian.net/diy_re_tranny_mnt.shtml' target='_blank'>Transmission Mounts</a>
              </List.Item>
            </List.Item>
          </List.Item>

        </List>
      </div>
    </div>
  )
}

export default Diy;