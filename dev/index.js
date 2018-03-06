import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main.js';
import RootReducer from './reducers/RootReducer.jsx';
import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import './styles/styles.scss';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <Main />
  </Provider>
  , document.querySelector('.container'));