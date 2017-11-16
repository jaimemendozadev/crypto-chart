import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main.js';
import RootReducer from './reducers/RootReducer.jsx';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <Main />
  </Provider>
  , document.querySelector('.container'));