import { SET_IMAGE_ADDED_STATUS, SET_IMAGES_BY_CASE_ID, SET_IMAGE_REMOVED_STATUS } from '../actions/actionTypes';
  
export default function imageReducer(state = {
  imageArrayByCaseId: [],
  imageRemovedStatus: true,
  imageAddedStatus: true,
}, action) {
    switch (action.type) {
      case SET_IMAGE_ADDED_STATUS:
        return Object.assign({}, state, {
          imageAddedStatus: action.imageAddedStatus,
        });
      case SET_IMAGES_BY_CASE_ID:
        return Object.assign({}, state, {
          imageArrayByCaseId: action.imageArrayByCaseId,
        });
      case SET_IMAGE_REMOVED_STATUS:
        return Object.assign({}, state, {
          imageRemovedStatus: action.imageRemovedStatus,
        });
      default:
        return state;
    }
}