import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,fffir lint
        initialState,
        appffflyMiddleware(reduxImmutableStateInvariant())
    );
}
