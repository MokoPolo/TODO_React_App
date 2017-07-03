import * as types from '../actions/actionTypes';

export default function todoReducer(state = [], action){
    switch(action.type){
        case types.CREATE_TASK_SUCCESS:
          return action.tasks;
        case types.LOAD_TASKS_SUCCESS:
          return action.tasks;
        default:
            return state;
    }
}
