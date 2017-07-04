import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskActions from '../../actions/todoActions';
import taskListRow from './TaskListRow';
import * as applicationConstants from './constants';

class TaskList extends React.Component {
  static get propTypes() {
    return {
      TaskList: PropTypes.object.isRequired,
      actions: PropTypes.object.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      task: { title: "" },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e) {
    const task = this.state.task;
    const newTask = Object.assign([], task);
    newTask.title = e.target.value;
    this.setState({ task: newTask });
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      switch (this.props.TaskType) {
        case applicationConstants.TODO_TYPE:
          this.props.actions.createTaskAction(this.state.task);
          break;
        default:
          this.props.actions.createTaskAction(this.state.task);
      }
    }
  }

  render() {//
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
  debugger;
  if (typeof(this) != "undefined"){
  switch (this.props.TaskType) {
    case applicationConstants.TODO_TYPE:
      return {
        taskList: state.taskReducer
      };
  }
  }
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
