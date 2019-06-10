import createSagaMiddleware from 'redux-saga'
import * as counterReducer from'./reducer'
import {applyMiddleware, combineReducers, compose, createStore } from 'redux'
import rootSaga  from '../sagas/Sagas'


export function configureStore(initialState) {

    const reducers = {
        counter: counterReducer.reducer
    };

    const rootReducer = combineReducers({...reducers});

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(rootReducer,
        initialState,
        compose(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(rootSaga);


    return store;
}