import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectModel } from '../actions/index';
import { bindActionCreators } from 'redux';

class Navigation extends Component {
  constructor(props) {
    super(props);

    //this.state = { activeItem: 'home'};

    // this.handleItemClick = (e, { name }) => {
    //   this.setState({ activeItem: name });
    //   consol.log('props: ', this.props)
    // }

    //const { activeItem } = this.state;
    console.log('props2: ', this.props);
    this.onClickModel = ( {name} ) => {
      console.log('name: ', name);
      this.props.selectModel(name);
    }
    
  }
  render() {
    return (
      <Menu>
        <Menu.Item header
          name='home'
          as={Link} to="/"
          //active={activeItem === 'home'}
          onClick={this.onClickModel}>
          M3Specs</Menu.Item>
        <Menu.Item
          name='e30'
          as={Link} to="/e30"
          //active={activeItem === 'e30'}
          onClick={this.handleItemClick}
          >E30</Menu.Item>
        <Menu.Item
          name='e36'
          //active={activeItem === 'e36'}
          onClick={this.handleItemClick}
          >E36</Menu.Item>
        <Menu.Item
          name='e46'
          //active={activeItem === 'e46'}
          onClick={this.handleItemClick}
          >E46</Menu.Item>
        <Menu.Item
          name='e90'
          //active={activeItem === 'e90'}
          onClick={this.handleItemClick}
          >E90/92/93</Menu.Item>
        <Menu.Item
          name='f80'
          //active={activeItem === 'f80'}
          onClick={this.handleItemClick}
          >F80</Menu.Item>
      </Menu>
    )
  }
}

// Anything returned from this function will end up as props
// on the Navigation component
function mapDispatchToProps(dispatch) {
  // whenever selectModel is called, the result should be passed to all
  // of our reducers
  return bindActionCreators({ selectModel: selectModel }, dispatch);
}

export default connect(null, mapDispatchToProps)(Navigation);