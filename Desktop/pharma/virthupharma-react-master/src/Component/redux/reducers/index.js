import { combineReducers } from 'redux';
import loginReducer from '../reducers/login-reducer';
import toastComponentReduccer from '../reducers/toast-component-reducer';
import loaderReducer from '../reducers/loader-reducer';
import imageReducer from '../reducers/image-reducer';
import caseReducer from '../reducers/case-reducer';
import questionReducer from '../reducers/questions-reducer';

const reducers = combineReducers({
    loginReducer,
    toastComponentReduccer,
    loaderReducer,
    imageReducer,
    caseReducer,
    questionReducer,
});
  
export default reducers;