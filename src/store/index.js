import {
    createStore,
    applyMiddleware,
    compose,
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import {persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import logger from 'redux-logger';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default () => {
    const store = createStore(
        persistCombineReducers(authPersistConfig, rootReducer),
        compose(applyMiddleware(sagaMiddleware ,logger))
    );

    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return {store, persistor};
};