
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import {autoRehydrate} from 'redux-persist'
import rootReducer from './reducers'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
    key:'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['pin']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
