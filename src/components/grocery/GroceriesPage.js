import ReactDOM from 'react-dom';
import React, {PropTypes} from 'react';
import GroceryList from '../common/GroceryList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as groceryActions from '../../actions/groceryActions';

const title = <div className="jumbotron text-center"><h1>Grocery List</h1></div>;

class GroceriesPage extends React.Component {
  static get propTypes() {
      return {
          groceryList: PropTypes.array.isRequired,
          actions: PropTypes.object.isRequired
      };
  }

  constructor(props) {
    super(props);
  }
  render() {
    const groceries = this.props.groceryList;
    return (
      <div>
        {title}
        <GroceryList GroceryList={groceries} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    groceryList: state.groceryReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(groceryActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroceriesPage);
