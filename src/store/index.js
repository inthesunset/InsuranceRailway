import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {
  createReactNavigationReduxMiddleware,
  createReduxContainer,
} from 'react-navigation-redux-helpers';
import reducers from '../modules/reducers';

let store = null; // eslint-disable-line

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.loginAndout,
  'root',
);

export const addNavigationListener = createReduxContainer('root');

if (__DEV__) { // eslint-disable-line
  const devToolsEnhancer = require('remote-redux-devtools'); // eslint-disable-line
  store = createStore(
    combineReducers(reducers),
    {},
    compose(
      applyMiddleware(navigationMiddleware, thunk),
      devToolsEnhancer.default({
        realtime: true,
        hostname: 'localhost',
        port: 8000,
        suppressConnectErrors: false,
      }),
    ),
  );
} else {
  store = createStore(
    combineReducers(reducers),
    {},
    applyMiddleware(navigationMiddleware, thunk),
  );
}

export default store;
