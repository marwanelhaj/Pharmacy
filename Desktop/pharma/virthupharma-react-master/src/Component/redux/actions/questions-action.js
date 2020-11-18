import { SET_QUESTION_IMAGES } from '../actions/actionTypes';
import * as API from '../../apis/apiServices.js';
import * as toastActions from './toast-component-action';
import * as loaderAction from './loader-action';

export function setQuestionImages(questionImages){
    return{
        type: SET_QUESTION_IMAGES,
        questionImages: questionImages,
    }
}

export const getQuestionImages = () => { 
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.getQuestionImages()
            .then(imageResult => {
                dispatch(setQuestionImages(imageResult.result));
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(loaderAction.setLoaderDisplay(false));
            });
    }
}

export const updateQuestionImage = (questionId, imageIndex, document) => { 
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.updateQuestionImage(questionId, imageIndex, document)
            .then(result => {
                dispatch(getQuestionImages());
                dispatch(toastActions.setToastSuccess(result.message));
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(loaderAction.setLoaderDisplay(false));
            });
    }
}