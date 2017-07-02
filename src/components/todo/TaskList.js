import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/todoActions';

class TaskList extends React.Component {
  static get propTypes() {
      return {
          taskList: PropTypes.object.isRequired,
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
    task.title = e.target.value;
    this.setState( {task: task});
  }

  handleKeyPress(e) {
    if (e.key == "Enter") {
      debugger;
      this.props.actions.createTaskAction(this.state.task);
    }
  }
  taskRow(taskItem, i) {
    return (
      <div key={i} className="row">
        <div className="col-md-3"/>
        <div className="col-md-6">
            <div className="checkbox">
            <label><input type="checkbox"/>{taskItem.title}</label>
            </div>
        </div>
        <div className="col-md-3" />
      </div>
    );
  }
  render() {//
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3"/>
          <div className="col-md-6">
            <div className="form-group">
              <input className="form-control"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                placeholder="What needs to be done" />
            </div>
          </div>
          <div className="col-md-3"/>
        </div>
        {this.props.TaskList.map(this.taskRow)}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
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
