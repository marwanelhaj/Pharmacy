import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

export const configureStore = () => {
    const store = createStore(
        reducers,
        undefined, //initial state
        compose(applyMiddleware(thunk)),
    );
    return store;
}
