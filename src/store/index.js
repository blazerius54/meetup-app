import { createStore } from 'redux';
import rootReducer from '../reducers';
import { sessionReducer } from '../reducers/session';

const store = createStore(rootReducer);

export default store;