import * as API from '../../apis/apiServices.js';
import { history } from '../../../../index'
import * as toastActions from '../actions/toast-component-action';
import * as loaderAction from './loader-action';

export const registerUser = (name, email, password) => {
    return (dispatch) => {
        dispatch(loaderAction.setLoaderDisplay(true));
        API.registerUser(name, email, password)
            .then(registerationResult => {
                dispatch(toastActions.setToastSuccess("Registered successfully"));
                API.login(email, password)
                    .then(loginResult => {
                        history.push("/viewImage");
                        dispatch(loaderAction.setLoaderDisplay(false));
                    }, error => {
                        dispatch(loaderAction.setLoaderDisplay(false));
                    })
            }, error => {
                if (error.response.status === 409) {
                    API.login(this.state.inputFields.email, this.state.inputFields.password)
                        .then(loginResult => {
                            history.push("/viewImage");
                            dispatch(loaderAction.setLoaderDisplay(false));
                        }, error => {
                            dispatch(loaderAction.setLoaderDisplay(false));
                        })
                }
                else {
                    dispatch(toastActions.setToastFail("Error while registering."));
                    dispatch(loaderAction.setLoaderDisplay(false));
                }
            });
    }
}