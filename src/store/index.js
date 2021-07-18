import {
    createStore,
    applyMiddleware
} from 'redux';

import createSagaMiddleware from 'redux-saga';

import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();


const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const store = () => {
    const store = createStore(
        persistCombineReducers(authPersistConfig, rootReducer),
        applyMiddleware(sagaMiddleware)
    );

    const persistor = persistStore(store);
    sagaMiddleware.run(rootSaga);
    return { store, persistor };
};

export default store;