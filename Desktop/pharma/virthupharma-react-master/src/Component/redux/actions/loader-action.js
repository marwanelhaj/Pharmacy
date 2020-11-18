import { SET_LOADER_DISPLAY } from '../actions/actionTypes';

export function setLoaderDisplay(isLoaderOpen){ 
    return{
        type: SET_LOADER_DISPLAY,
        isLoaderOpen: isLoaderOpen,
    }
}