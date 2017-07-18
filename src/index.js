//import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadTasks} from './actions/todoActions';
import {loadGroceryItems} from './actions/groceryActions';

const store = configureStore();
store.dispatch(loadTasks());
store.dispatch(loadGroceryItems());

//const s = store.getState();
render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
