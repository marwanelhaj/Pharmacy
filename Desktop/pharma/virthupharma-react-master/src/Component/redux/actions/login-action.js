import { SET_LOGGEDIN_STATUS } from '../actions/actionTypes';
import * as API from '../../apis/apiServices.js';
import { history } from '../../../../index'
import * as toastActions from '../actions/toast-component-action';
import * as loaderAction from './loader-action';

export function setLoginStatus(isLoggedIn) { //action creater
    return {
        type: SET_LOGGEDIN_STATUS,
        isLoggedIn: isLoggedIn,
    }
}

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.login(email, password)
            .then(result => {
                dispatch(toastActions.setToastSuccess("Successfully logged in"));
                dispatch(setLoginStatus(true))
                history.push('/viewImage')
                dispatch(loaderAction.setLoaderDisplay(false));
            }, error => {
                dispatch(toastActions.setToastFail("Error while logging in"))
                dispatch(setLoginStatus(false))
                dispatch(loaderAction.setLoaderDisplay(false));
            });
    }
}