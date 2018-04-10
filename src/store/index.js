import { createStore } from 'redux';
import rootReducer from '../reducers';
import { sessionReducer } from '../reducers/session';
import meetUps from '../data/index'

const defaultState = {
    sessionState: {
        meetUps
    }
}

const store = createStore(rootReducer);
// const store = createStore(sessionReducer, defaultState);

export default store;