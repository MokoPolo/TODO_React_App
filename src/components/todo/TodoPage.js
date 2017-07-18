import ReactDOM from 'react-dom';
import React, {PropTypes} from 'react';
import TaskList from '../common/TaskList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from '../../actions/todoActions';
import * as applicationConstants from '../common/constants';

const title = <div className="jumbotron text-center"><h1>Tasks</h1></div>;

class TaskPage extends React.Component {
  static get propTypes() {
      return {
        taskList: PropTypes.array.isRequired,
        actions: PropTypes.object.isRequired
      };
  }

  //constructor(props) {
  //  super(props);
  //}
  render() {
    debugger;
    const tasks = this.props.taskList;
    return (
      <div>
        {title}
        <TaskList TaskList={tasks} />
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

