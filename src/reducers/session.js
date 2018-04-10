import { AUTH_USER_SET } from '../consts'
const INITIAL_STATE = {
  authUser: null,
};

const applySetAuthUser = (state, action) => ({
  ...state,
  authUser: action.authUser
});

const applySetUsers = (state, action) => ({
  ...state,
  users: action.users
});


export function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER_SET: {
      return applySetAuthUser(state, action);
    }
    case 'USERS_SET' : {
      return applySetUsers(state, action);
    }
    default: return state;
  }
}

// export default sessionReducer;