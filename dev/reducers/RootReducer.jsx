import React from 'react';
import {combineReducers} from 'redux';
import SetCurrencyData from './SetCurrencyData.jsx';

const RootReducer = combineReducers({
  CurrencyData: SetCurrencyData
});

export default RootReducer;