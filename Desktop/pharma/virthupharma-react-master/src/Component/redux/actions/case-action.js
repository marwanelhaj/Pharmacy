import { SET_CASES_ARRAY } from '../actions/actionTypes';
import * as API from '../../apis/apiServices.js';
import * as toastActions from './toast-component-action';
import * as loaderAction from './loader-action';

export function setCases(caseArray){ //action creater
    return{
        type: SET_CASES_ARRAY,
        caseArray: caseArray,
    }
}

export const getCases = () => { 
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.getCases()
            .then(caseResult => {
                dispatch(setCases(caseResult.result))
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(toastActions.setToastFail("Unable to fetch cases"));
                dispatch(loaderAction.setLoaderDisplay(false));
            })
    }
}

export const addCase = (title, description) => { 
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.addCase(title, description)
            .then(caseResult => {
                dispatch(getCases());
                dispatch(loaderAction.setLoaderDisplay(false));
                dispatch(toastActions.setToastSuccess("Case added successfully!"));
            }, error => {
                dispatch(toastActions.setToastFail("Unable to add case"));
                dispatch(loaderAction.setLoaderDisplay(false));
            })
    }
}