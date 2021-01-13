import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';

import rootReducer from './root-reducer'

const middlewares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlewares)) // technically dont need export here

export const persistor = persistStore(store) // technically dont need export here

export default { store, persistor };
