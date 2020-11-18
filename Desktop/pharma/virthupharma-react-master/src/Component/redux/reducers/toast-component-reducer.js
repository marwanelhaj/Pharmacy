import { SET_TOAST_SUCCESS, SET_TOAST_FAIL, SET_TOAST_WARNING, SET_TOAST_INFO, RESET_TOAST } from '../actions/actionTypes';
  
export default function toastComponentReduccer(state = {
    message: "",
    severity: "success",
    timeout: 3000,
    triggerOpen: false,
}, action) {
    switch (action.type) {
        case SET_TOAST_SUCCESS:
            return Object.assign({}, state, {
                message: action.message,
                severity: "success",
                triggerOpen: true,
            });
        case SET_TOAST_FAIL:
            return Object.assign({}, state, {
                message: action.message,
                severity: "error",
                triggerOpen: true,
            });
        case SET_TOAST_WARNING:
            return Object.assign({}, state, {
                message: action.message,
                severity: "warning",
                triggerOpen: true,
            });
        case SET_TOAST_INFO:
            return Object.assign({}, state, {
                message: action.message,
                severity: "info",
                triggerOpen: true,
            });
        case RESET_TOAST:
            return Object.assign({}, state, {
                triggerOpen: false,
            });
        default:
            return state;
    }
}