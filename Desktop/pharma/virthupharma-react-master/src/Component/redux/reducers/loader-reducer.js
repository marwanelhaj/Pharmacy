import { SET_LOADER_DISPLAY } from '../actions/actionTypes'
  
export default function loaderReducer(state = {
    isLoaderOpen: false,
}, action) {
    switch (action.type) {
      case SET_LOADER_DISPLAY:
        return Object.assign({}, state, {
            isLoaderOpen: action.isLoaderOpen,
        });
  
      default:
        return state;
    }
}