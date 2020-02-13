
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import allReducers from './reducers';

const logger = createLogger({
    collapsed: true,
});

const composeEnhancers = composeWithDevTools({});

const persistConfig = {
    key: 'planner',
    storage: AsyncStorage,
    whiteList: ['planner']
};

export default function configureStore() {
    const reducer = persistReducer(persistConfig, combineReducers(allReducers));
    const middleware = composeEnhancers(applyMiddleware(thunk, promise, logger));
    const store = createStore(reducer, middleware);
    const persistor = persistStore(store);
    return {store, persistor};
}
