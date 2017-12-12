import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

let enhancer;
if (process.env.NODE_ENV === 'production') {
  // production code
  enhancer = applyMiddleware(logger, thunk);
} else {
  // dev code
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;
  /* eslint-enable */

  enhancer = composeEnhancers(applyMiddleware(logger, thunk));
}

const store = createStore(reducer, enhancer);

export default store;
