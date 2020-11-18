import { SET_CASES_ARRAY } from '../actions/actionTypes'
  
export default function caseReducer(state = {
    caseArray: []
}, action) {
    switch (action.type) {
        case SET_CASES_ARRAY:
            return Object.assign({}, state, {
                caseArray: action.caseArray,
            });
        default:
            return state;
    }
}