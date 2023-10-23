import { compose, applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import { rootReducer } from './root-reducer';

//root reducer

const middleWares = [logger]

const composedEnhancers = compose(applyMiddleware(...middleWares))

// , undefined, composedEnhancers
export const store = createStore(rootReducer, undefined, composedEnhancers)






