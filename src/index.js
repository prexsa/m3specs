import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import e30 from './components/e30'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/e30' component={e30} />
    </Router>
  </Provider>
  , document.querySelector('.container'));
