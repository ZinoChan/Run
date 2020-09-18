import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import {persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reducers';

const authPersistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export default () => {
    const store = createStore(
        persistCombineReducers(authPersistConfig, rootReducer)
    );

    const persistor = persistStore(store);
    return {store, persistor};
};