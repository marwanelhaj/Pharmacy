import { SET_QUESTION_IMAGES } from '../actions/actionTypes'
  
export default function questionReducer(state = {
    questionImages: {},
}, action) {
    switch (action.type) {
      case SET_QUESTION_IMAGES:
        return Object.assign({}, state, {
            questionImages: action.questionImages,
        });
  
      default:
        return state;
    }
}