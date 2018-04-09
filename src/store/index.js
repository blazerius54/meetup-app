import { createStore } from 'redux';
import rootReducer from '../reducers';
import sessionReducer from '../reducers/session';
import text from '../data/index'

const defaultState = {
    text
}

const store = createStore(rootReducer);
// const store = createStore(sessionReducer);
// const store = createStore(sessionReducer, defaultState);

export default store;