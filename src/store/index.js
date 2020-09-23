import {
    createStore,
    applyMiddleware,
} from 'redux';

import {persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';
import logger from 'redux-logger';



const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default () => {
    const store = createStore(
        persistCombineReducers(authPersistConfig, rootReducer),
        applyMiddleware(logger)
    );

    const persistor = persistStore(store);
    return {store, persistor};
};