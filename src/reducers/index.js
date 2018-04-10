import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { meetupReducer } from './meetups';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  meetUps: meetupReducer,
});

export default rootReducer;