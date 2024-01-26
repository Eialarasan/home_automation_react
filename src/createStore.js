import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootWatchers from './redux/Saga';
import { reducers } from './redux/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    storage,
};

const sagaMiddleware = createSagaMiddleware();
let middleware;
middleware = applyMiddleware(sagaMiddleware,logger)
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(persistedReducer, {}, compose(middleware),);
export const persistor = persistStore(store);

sagaMiddleware.run(rootWatchers);