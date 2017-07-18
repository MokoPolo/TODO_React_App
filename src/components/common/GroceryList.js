import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as groceryActions from '../../actions/groceryActions';
import groceryListRow from './GroceryListRow';
import * as applicationConstants from './constants';

class GroceryList extends React.Component {
  static get propTypes() {
    return {
      GroceryList: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      groceryItem: { title: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    const groceryItem = this.state.groceryItem;
    const newGroceryItem = Object.assign([], groceryItem);
    newGroceryItem.title = e.target.value;
    this.setState({ groceryItem: newGroceryItem });
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      this.props.actions.createGroceryAction(this.state.groceryItem);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3" />
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3" />
        </div>
        {this.props.TaskList.map(taskListRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    taskList: state.taskReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(taskActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
