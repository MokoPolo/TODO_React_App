// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
//import Header from './common/Header';
//import {connect} from 'react-redux';

class App extends React.Component {
    static get propTypes() { 
      return { 
          children: PropTypes.object.isRequired 
      }; 
  }
  render() {
    return (
      <div className="container-fluid">
        {this.props.children}
      </div>
    );
  }
}


export default (App);
