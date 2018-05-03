import { combineReducers } from 'redux';
import { sessionReducer } from './session';
import { meetupReducer } from './meetups';
import { commentsReducer } from './comments';

const rootReducer = combineReducers({
  sessionState: sessionReducer,
  meetUps: meetupReducer,
  comments: commentsReducer
});

export default rootReducer;