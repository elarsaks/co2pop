import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux imports
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import { pageMenu, chartData } from './redux/Reducers';

const logger = createLogger();

const rootReducers = combineReducers({pageMenu, chartData })

const store = createStore(rootReducers, applyMiddleware( logger))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
