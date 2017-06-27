import {combineReducers} from 'redux';
import todos from './todoReducer';
import * as todoActions from '../actions/todoActions';
const rootReducer = combineReducers({
    todos
});

export default rootReducer;
