import { SET_LOGGEDIN_STATUS } from '../actions/actionTypes'
  
export default function loginReducer(state = {
    isLoggedIn: false,
}, action) {
    switch (action.type) {
      case SET_LOGGEDIN_STATUS:
        return Object.assign({}, state, {
            isLoggedIn: action.isLoggedIn,
        });
  
      default:
        return state;
    }
}