import * as types from '../actions/actionTypes';

export default function groceryReducer(state = [], action){
    switch(action.type){
        case types.CREATE_GROCERY_SUCCESS:
          return action.groceries;
        case types.LOAD_GROCERIES_SUCCESS:
          return action.groceries;
        default:
            return state;
    }
}
