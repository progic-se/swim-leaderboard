// React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

// Components
import Home from './containers/home/js/Home';

// Containers
import App from './containers/app/js/App';

// Reducers
import appReducer from './reducers/app';
import leaderboardReducer from './reducers/leaderboard';

// Index dependencies
require("./index.less");

/******************************************************************************
 *               Store
 ******************************************************************************/

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  createLogger()
)(createStore);

const reducers = combineReducers({
  appReducer,
  leaderboardReducer
});


const store = createStoreWithMiddleware(reducers);

/******************************************************************************
 *         Route handling
 ******************************************************************************/
 function handleViewItem(itemId) {
   browserHistory.push('/item/' + itemId);
 }

/******************************************************************************
 *         Root component
 ******************************************************************************/
ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App} >
        <IndexRoute component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
