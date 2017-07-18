import {combineReducers} from 'redux';
import taskReducer from './todoReducer';
import groceryReducer from './groceryReducer';
import * as todoActions from '../actions/todoActions';
const rootReducer = combineReducers({
    taskReducer, groceryReducer
});

export default rootReducer;
