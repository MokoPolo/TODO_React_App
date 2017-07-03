import taskApi from '../api/mockTaskApi';
import * as types from './actionTypes';

export function createTaskAction(task){
  return function(dispatch) {
    return taskApi.saveTask(task).then(tasks => {
      dispatch(createTaskActionSuccess(tasks));
    });
  };
}

export function createTaskActionSuccess(tasks){
    return {type: types.CREATE_TASK_SUCCESS, tasks};
}

export function loadTasksSuccess(tasks){
    return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function loadTasks() {
  return function(dispatch) {
    return taskApi.getAllTasks().then(tasks => {
      dispatch(loadTasksSuccess(tasks));
    }).catch(error => {
      throw(error);
    });
  };
}
