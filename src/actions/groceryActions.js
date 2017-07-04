import groceryApi from '../api/mockGroceryApi';
import * as types from './actionTypes';

export function createGroceryItemAction(task){
  return function(dispatch) {
    return groceryApi.saveGroceryItemave(task).then(tasks => {
      dispatch(createTaskActionSuccess(tasks));
    });
  };
}

export function createGroceryItemSuccess(tasks){
    return {type: types.CREATE_TASK_SUCCESS, tasks};
}

export function loadGroceryItemsSuccess(tasks){
    return {type: types.LOAD_TASKS_SUCCESS, tasks};
}

export function loadGroceryItems() {
  return function(dispatch) {
    return groceryApi.getAllGroceryItems().then(tasks => {
      dispatch(loadGroceryItemsSuccess(tasks));
    }).catch(error => {
      throw(error);
    });
  };
}
