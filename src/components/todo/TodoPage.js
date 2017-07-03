import ReactDOM from 'react-dom';
import React, {PropTypes} from 'react';
import TaskList from './TaskList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/todoActions';

const title = <div className="jumbotron text-center"><h1>Tasks</h1></div>;

class TaskPage extends React.Component {
  static get propTypes() {
      return {
          taskList: PropTypes.object.isRequired,
          actions: PropTypes.object.isRequired
      };
  }
  render() {
    const tasks = this.props.taskList;
    debugger;
    return (
      <div>
        {title}
        <TaskList foo="asd" TaskListtt={tasks} />
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);
