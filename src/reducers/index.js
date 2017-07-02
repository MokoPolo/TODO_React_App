import {combineReducers} from 'redux';
import taskReducer from './todoReducer';
import * as todoActions from '../actions/todoActions';
const rootReducer = combineReducers({
    taskReducer
});

export default rootReducer;
