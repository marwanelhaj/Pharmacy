import { SET_IMAGE_ADDED_STATUS, SET_IMAGES_BY_CASE_ID, SET_IMAGE_REMOVED_STATUS } from '../actions/actionTypes';
import * as API from '../../apis/apiServices.js';
import * as toastActions from './toast-component-action';
import * as loaderAction from './loader-action';

export function setImageAddStatus(status) {
    return {
        type: SET_IMAGE_ADDED_STATUS,
        imageAddedStatus: status,
    }
}

export const addImage = (title, image, caseId) => {
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        dispatch(setImageAddStatus(false));
        API.addImage(title, image, caseId)
            .then(addResult => {
                dispatch(setImageAddStatus(true));
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(toastActions.setToastFail("Error while adding image"));
                dispatch(loaderAction.setLoaderDisplay(false));
            });
    }
}

export function setImagesByCaseId(imageArrayByCaseId) {
    return {
        type: SET_IMAGES_BY_CASE_ID,
        imageArrayByCaseId: imageArrayByCaseId,
    }
}

export const getImages = (caseId) => {
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.getImages(caseId)
            .then(imageResult => {
                dispatch(setImagesByCaseId(imageResult.result))
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(loaderAction.setLoaderDisplay(false));
            });
    }
}

export function setImageRemovedStatus(status) {
    return {
        type: SET_IMAGE_REMOVED_STATUS,
        imageRemovedStatus: status,
    }
}

export const removeImage = (imageId) => {
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        dispatch(setImageRemovedStatus(false));
        API.removeImage(imageId)
            .then(deleteResult => {
                dispatch(setImageRemovedStatus(true));
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(toastActions.setToastFail("Error while deleting image"));
                dispatch(loaderAction.setLoaderDisplay(false));
            });
    }
}