import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import reducerFactory from './reducerFactory';

let store = {};
let sagaMiddleware;
const storeFactory = (reducers, initialState, rootSaga) => {
    sagaMiddleware = createSagaMiddleware();
    store = createStore(
        reducerFactory(reducers),
        initialState,
        compose(applyMiddleware(sagaMiddleware)),
    );
    store.tasks = rootSaga ? [sagaMiddleware.run(rootSaga)] : [];

    return store;
};

export const getStore = () => store;
export const getSagaMiddleWare = () => sagaMiddleware;

export default storeFactory;

