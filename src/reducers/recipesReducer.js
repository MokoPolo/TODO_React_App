import * as types from '../actions/actionTypes';

export default function recipesReducer(state = [], action){
    switch(action.type){
        case types.CREATE_RECIPE_SUCCESS:
          return action.recipes;
        case types.LOAD_RECIPES_SUCCESS:
          return action.recipes;
        default:
            return state;
    }
}
