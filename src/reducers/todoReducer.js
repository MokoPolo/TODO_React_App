import * as types from '../actions/actionTypes';

export default function todoReducer(state = [], action){
    switch(action.type){
        case types.CREATE_TODO:
        return [...state,
            Object.assign({}, action.task)
        ];
        case types.LOAD_TASKS_SUCCESS:
          return action.tasks;
        default:
            return state;
    }
}
