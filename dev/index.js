import React from 'react';
import ReactDOM from 'react-dom';
import Chart from './components/Chart.jsx';
import RootReducer from './reducers/RootReducer.jsx';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <Chart />
  </Provider>
  , document.querySelector('.container'));