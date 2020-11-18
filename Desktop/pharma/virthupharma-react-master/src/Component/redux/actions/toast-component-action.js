import { SET_TOAST_SUCCESS, SET_TOAST_FAIL, SET_TOAST_WARNING, SET_TOAST_INFO, RESET_TOAST } from '../actions/actionTypes';

export function setToastSuccess(message){
    return{
        type: SET_TOAST_SUCCESS,
        message: message,
    }
}

export function setToastFail(message){
    return{
        type: SET_TOAST_FAIL,
        message: message,
    }
}

export function setToastWarning(message){
    return{
        type: SET_TOAST_WARNING,
        message: message,
    }
}

export function setToastInfo(message){
    return{
        type: SET_TOAST_INFO,
        message: message,
    }
}

export function resetToast(){
    return{
        type: RESET_TOAST,
    }
}
