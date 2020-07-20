import createSagaMiddleware from 'redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import reducerFactory from './reducerFactory';

let store = {};
let sagaMiddleware;
const storeFactory = (reducers, initialState, rootSaga) => {
    sagaMiddleware = createSagaMiddleware();
    console.log('INITIALSTATE', initialState)
    store = createStore(
        reducerFactory(reducers),
        initialState,
        compose(applyMiddleware(sagaMiddleware)),
    );
    store.tasks = rootSaga ? [sagaMiddleware.run(rootSaga)] : [];

    // reducerSagaRegistry.reset();

    // reducerSagaRegistry.initReducers({
    //     ...bootReducers,
    //     ...store.initialReducers,
    // }, asyncReducers => store.replaceReducer(combineReducers(asyncReducers)));

    // reducerSagaRegistry.initSagas(
    //     rootSaga.injectedSagas,
    //     (asyncSaga) => {
    //         let task = null;
    //         if (asyncSaga) {
    //             task = sagaMiddleware.run(asyncSaga);
    //             store.tasks = [...store.tasks, task];
    //         }
    //         return task;
    //     },
    //     sagaTask => sagaTask && sagaTask.cancel(),
    // );
    return store;
};

export const getStore = () => store;
export const getSagaMiddleWare = () => sagaMiddleware;

export default storeFactory;

