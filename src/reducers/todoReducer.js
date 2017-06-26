import * as types from '../actions/actionTypes';

export default function todoReducer(state = [], action){
    switch(action.type){
        case types.CREATE_TODO:
        debugger;
        return [...state,
            Object.assign({}, action.todo)
        ];

        default:
            return state;
    }
}